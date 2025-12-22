import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center gap-3 p-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onToggle(todo.id, todo.completed)}
        className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
      />
      <span className={`flex-1 text-gray-800 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)} 
        className="text-red-500 hover:text-red-700 text-sm font-medium px-2 py-1 rounded hover:bg-red-50 transition-colors"
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;