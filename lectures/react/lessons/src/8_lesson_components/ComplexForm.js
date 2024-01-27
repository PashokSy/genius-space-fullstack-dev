import React, { useState } from 'react';

export const ComplexForm = () => {
  const [checked, setChecked] = useState(false);
  const [radioOption, setRadioOption] = useState('');
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  const handleRadioOptionChange = (e) => {
    setRadioOption(e.target.value);
  };

  const handleOption1Change = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleOption2Change = (e) => {
    setSelectedOption2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ checked, radioOption, selectedOption1, selectedOption2 });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            Accept conditions
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="option1"
              checked={radioOption === 'option1'}
              onChange={handleRadioOptionChange}
            />
            Option 1
          </label>
          <label>
            <input
              type="radio"
              value="option2"
              checked={radioOption === 'option2'}
              onChange={handleRadioOptionChange}
            />
            Option 2
          </label>
          <label>
            <input
              type="radio"
              value="option3"
              checked={radioOption === 'option3'}
              onChange={handleRadioOptionChange}
            />
            Option 3
          </label>
        </div>
        <div>
          <label>
            Chose option 1:
            <select value={selectedOption1} onChange={handleOption1Change}>
              <option value="option1 1">Option 1 1</option>
              <option value="option1 2">Option 1 2</option>
              <option value="option1 3">Option 1 3</option>
            </select>
          </label>
          <label>
            Chose option 1:
            <select value={selectedOption2} onChange={handleOption2Change}>
              <option value="option2 1">Option 2 1</option>
              <option value="option2 2">Option 2 2</option>
              <option value="option2 3">Option 2 3</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
