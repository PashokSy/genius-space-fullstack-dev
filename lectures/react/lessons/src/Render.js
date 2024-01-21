import React from 'react';
import TodoList from './TodoList';

const Render = () => {
  const toDos = [
    { id: 1, todo: 'first todo' },
    { id: 2, todo: 'second todo' },
    { id: 3, todo: 'third todo' },
    { id: 4, todo: 'forth todo' },
    { id: 5, todo: 'fifth todo' },
  ];

  return (
    <ul>
      {toDos.map((todo) => (
        <TodoList key={todo.id} todo={todo.todo} />
      ))}
    </ul>
  );
};

export default Render;
