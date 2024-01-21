import { useState } from 'react';

import ListItemComponent from './ListItemComponent.js';

const ListComponent = () => {
  const [item, setItem] = useState(['first element']);
  const [input, setInput] = useState('');

  const onClickHandler = (input) => {
    const updatedElement = [...item, input];
    setItem(updatedElement);
    setInput('');
  };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <>
      <input onChange={onChangeHandler} value={input} />
      <ul>
        {item.map((element, index) => (
          <ListItemComponent element={element} index={index} />
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add new element</button>
    </>
  );
};

export default ListComponent;
