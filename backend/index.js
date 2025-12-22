const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON bodies

// In-memory storage
let todos = [];
let idCounter = 1;

// Routes

// 1. Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// 2. Create a new todo
app.post('/todos', (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }
  
  const newTodo = { 
    id: idCounter++, 
    text, 
    completed: false 
  };
  
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// 3. Update a todo (Toggle status or edit text)
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { text, completed } = req.body;
  
  const todo = todos.find(t => t.id == id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  if (text !== undefined) todo.text = text;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// 4. Delete a todo
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id == id);

  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  todos.splice(index, 1);
  res.status(204).send();
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});