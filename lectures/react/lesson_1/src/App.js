// import {createElement} from 'react'

import HelloWorldComponent from './HelloWorldComponent';
import MyClassComponent from './MyClassComponent';

import './App.css';

function App() {
  // const secondElement = createElement('h1', {className: 'greeting-hello'}, 'Hello again')
  // const rootElement = createElement('div', {className: 'greeting'}, secondElement)
  const hello = 'Hello World'
  // return rootElement
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {hello}
        </p>
        <HelloWorldComponent />
        <MyClassComponent />
      </header>
    </div>
  );
}

export default App;
