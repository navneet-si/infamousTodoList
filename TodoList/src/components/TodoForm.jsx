import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new task..."
        className="flex-1 border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:border-blue-500 transition-colors"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-semibold transition-colors"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;