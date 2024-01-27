import React from 'react';

export const UserForm = ({ handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="text" name="lastName" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
