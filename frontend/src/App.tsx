import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { Todo, TodoFormData } from './types';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoData: TodoFormData) => {
    const newTodo: Todo = {
      ...todoData,
      _id: Date.now().toString(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const handleToggleComplete = (id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id: string) => {
    setTodos(prev => prev.filter(todo => todo._id !== id));
  };

  return (
    <div className="h-screen bg-background p-6 flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-7xl h-[calc(100vh-48px)] bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-card">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-4xl font-bold text-text-primary mb-3 tracking-wide hover:text-primary-300 transition-colors duration-300 uppercase font-lust">
              Task Harmony
            </h1>
            <p className="text-text-secondary text-lg">
              Organize your day with grace and simplicity
            </p>
          </div>

          {/* Main Content */}
          <div className="flex-1 grid md:grid-cols-[380px,1fr] gap-6 min-h-0">
            {/* Form Section */}
            <div className="bg-white/80 rounded-2xl shadow-soft p-6 overflow-y-auto custom-scrollbar">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-text-primary mb-2 group tracking-wide uppercase font-lust">
                  Add New Task
                  <div className="h-1 w-20 bg-primary-300 rounded-full transition-all duration-300 group-hover:w-full"></div>
                </h2>
              </div>
              <AddTodoForm onSubmit={handleAddTodo} />
            </div>

            {/* List Section */}
            <div className="bg-white/80 rounded-2xl shadow-soft p-6 overflow-hidden flex flex-col hover:shadow-card transition-shadow duration-300">
              <div className="mb-4">
                <h2 className="text-xl font-bold text-text-primary mb-2 group tracking-wide uppercase font-lust">
                  Your Tasks
                  <div className="h-1 w-20 bg-primary-300 rounded-full transition-all duration-300 group-hover:w-full"></div>
                </h2>
              </div>
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <TodoList 
                  todos={todos}
                  onToggleComplete={handleToggleComplete}
                  onDelete={handleDelete}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App; 