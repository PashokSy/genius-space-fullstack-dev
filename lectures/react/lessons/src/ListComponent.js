import { useState } from 'react';

import ListItemComponent from './ListItemComponent.js';
import Button from './Button.js';

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

  const handleDelete = () => {
    console.log('delete button clicked');
  };

  return (
    <>
      <input onChange={onChangeHandler} value={input} />
      <ul>
        {item.map((element, index) => (
          <ListItemComponent element={element} index={index}>
            {<Button text={'delete'} onClick={handleDelete} type={'button'} />}
          </ListItemComponent>
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add new element</button>
    </>
  );
};

export default ListComponent;
