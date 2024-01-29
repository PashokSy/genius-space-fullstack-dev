import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const ChildComponent = () => {
  const value = useContext(AuthContext);

  console.log(value);

  return <div>ChildComponent</div>;
};
