import React from 'react';

export const TodoInfo = ({ todos, handleDeleteAll }) => {
  return (
    <div className="TodoInfo">
      <button onClick={handleDeleteAll} className="delete-btn">
        Delete All
      </button>
      <p>Total Count: {todos.length}</p>
    </div>
  );
};
