import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleComplete, onDelete }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');

  const categories = ['all', 'work', 'personal', 'shopping', 'health'];
  const priorities = ['all', 'high', 'medium', 'low'];

  const filteredTodos = todos.filter(todo => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory = selectedCategory === 'all' || 
      todo.category.toLowerCase() === selectedCategory;

    // Priority filter
    const matchesPriority = selectedPriority === 'all' || 
      todo.priority.toLowerCase() === selectedPriority;

    return matchesSearch && matchesCategory && matchesPriority;
  });

  if (todos.length === 0) {
    return (
      <div className="text-center text-text-secondary py-8">
        <p className="text-lg">No tasks yet. Add some tasks to get started!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Search and Filters Section */}
      <div className="bg-white/90 rounded-xl p-4 shadow-soft mb-4 sticky top-0 z-10">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tasks by title or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 rounded-lg bg-white border border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-transparent transition-all duration-200"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Filter by Category
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-300 text-white'
                      : 'bg-primary-100 text-primary-400 hover:bg-primary-200'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Priority Filter */}
          <div>
            <label className="block text-sm font-medium text-text-secondary mb-2">
              Filter by Priority
            </label>
            <div className="flex flex-wrap gap-2">
              {priorities.map(priority => (
                <button
                  key={priority}
                  onClick={() => setSelectedPriority(priority)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedPriority === priority
                      ? 'bg-primary-300 text-white'
                      : 'bg-primary-100 text-primary-400 hover:bg-primary-200'
                  }`}
                >
                  {priority.charAt(0).toUpperCase() + priority.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Todo Items */}
      {filteredTodos.length === 0 ? (
        <div className="text-center text-text-secondary py-8">
          <p className="text-lg">No tasks found matching your criteria.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTodos.map(todo => (
            <TodoItem
              key={todo._id}
              todo={todo}
              onToggleComplete={onToggleComplete}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList; 