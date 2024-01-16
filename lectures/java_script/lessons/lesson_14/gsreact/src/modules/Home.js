import './Home.css';
import React, { useState } from 'react';

const Home = () => {
  const [value, useValue] = useState(0);

  const Change = () => {
    useValue(value + 1);
  };

  return (
    <div className="block">
      <p>Counter</p>
      <p>{value}</p>
      <button onClick={Change}>click</button>
    </div>
  );
};

export default Home;
