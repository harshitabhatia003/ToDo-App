import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete }) => {
  const getCategoryStyle = (category: string): string => {
    switch (category.toLowerCase()) {
      case 'work':
        return 'bg-primary-100 text-primary-400';
      case 'personal':
        return 'bg-accent-light text-accent-dark';
      case 'shopping':
        return 'bg-primary-200 text-text-primary';
      case 'health':
        return 'bg-primary-100 text-primary-400';
      default:
        return 'bg-primary-300 text-white';
    }
  };

  const getPriorityStyle = (priority: string): string => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'bg-danger-light text-danger-dark';
      case 'medium':
        return 'bg-primary-200 text-primary-400';
      case 'low':
        return 'bg-accent-light text-accent-dark';
      default:
        return 'bg-primary-100 text-primary-400';
    }
  };

  return (
    <div 
      className={`group bg-white/80 backdrop-blur-sm rounded-xl shadow-soft p-6 transition-all duration-300 hover:shadow-card hover:-translate-y-1 ${
        todo.completed ? 'opacity-75' : ''
      }`}
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <h3 className={`text-lg font-semibold truncate transition-colors duration-200 font-lust ${
              todo.completed ? 'line-through text-text-secondary' : 'text-text-primary'
            }`}>
              {todo.title}
            </h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
              getCategoryStyle(todo.category)
            } group-hover:scale-105`}>
              {todo.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
              getPriorityStyle(todo.priority)
            } group-hover:scale-105`}>
              {todo.priority}
            </span>
          </div>
          
          <p className="text-text-secondary mb-3 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {todo.description}
          </p>
          
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <svg 
              className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <span className="transition-colors duration-200 group-hover:text-text-primary">
              Due: {new Date(todo.dueDate).toLocaleDateString()}
            </span>
          </div>
        </div>

        <div className="flex gap-2 opacity-90 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={() => onToggleComplete(todo._id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 font-lust ${
              todo.completed
                ? 'bg-primary-100 text-text-secondary hover:bg-primary-200'
                : 'bg-primary-300 text-white hover:bg-primary-400'
            } hover:scale-105 active:scale-95`}
          >
            {todo.completed ? 'Completed' : 'Complete'}
          </button>
          <button
            onClick={() => onDelete(todo._id)}
            className="p-2 text-danger hover:text-white hover:bg-danger rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 group/delete font-lust"
            aria-label="Delete task"
          >
            <div className="relative">
              <svg 
                className="w-5 h-5 transition-transform duration-200 group-hover/delete:rotate-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem; 