import { useEffect, useRef, useState } from 'react';
import './App.css';
import { Unmount } from './Unmount';

function App() {
  const inputRef = useRef();
  // console.log(headerRef.current);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  // const [value, setValue] = useState(0);
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   console.log('componentDidMount useEffect');
  // }, []);

  // useEffect(() => {
  //   console.log('componentDidUpdate useEffect');
  // }, [value]);

  // const handleClick = () => {
  //   // setValue(value + 1);
  //   setIsMounted(!isMounted);
  // };

  return (
    <div className="App">
      <header className="App-header">
        <input ref={inputRef} />
        <p>text</p>
        <button onClick={handleFocus}>Focus me</button>
        {/* <p>{value}</p>
        {isMounted ? <Unmount /> : <p>Text</p>}
        <button onClick={handleClick}>Click me</button> */}
      </header>
    </div>
  );
}

export default App;
