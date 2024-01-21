import CounterComponent from './CounterComponent.js';
import ListComponent from './ListComponent.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListComponent />
        <CounterComponent />
      </header>
    </div>
  );
}

export default App;
