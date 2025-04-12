export type Priority = 'low' | 'medium' | 'high';
export type Category = 'personal' | 'work' | 'shopping' | 'health';

export interface TodoFormData {
  title: string;
  description: string;
  priority: Priority;
  category: Category;
  dueDate: string;
}

export interface Todo extends TodoFormData {
  _id: string;
  completed: boolean;
  createdAt: string;
} 