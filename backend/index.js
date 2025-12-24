const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Todo = require('./models/Todo'); // Import the model

const app = express();
const port = 3000;
const MONGO_URI = 'mongodb://localhost:27017/todo-db'; // Local MongoDB URI

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes

// 1. Get all todos
app.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. Create a new todo
app.post('/todos', async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Text is required' });

    const newTodo = new Todo({ text });
    await newTodo.save();
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { text, completed } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { text, completed },
      { new: true } // Return the updated document
    );

    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) return res.status(404).json({ error: 'Todo not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});