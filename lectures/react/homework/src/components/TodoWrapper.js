import { v4 as uuidv4 } from 'uuid';

import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';
import {
  useLocalStorage,
  deleteFromLocalStorage,
} from '../utils/useLocalStorage';
import { TodoInfo } from './TodoInfo';

uuidv4();

export const TodoWrapper = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const addTodo = async (todo) => {
    await setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDeleteAll = () => {
    deleteFromLocalStorage('todos');
    setTodos([]);
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List</h1>
      <TodoInfo todos={todos} handleDeleteAll={handleDeleteAll} />
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleComplete={toggleComplete}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        )
      )}
    </div>
  );
};
