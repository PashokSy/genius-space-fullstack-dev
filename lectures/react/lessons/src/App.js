import './App.css';
import { useMemo, useState } from 'react';

function App() {
  const [list, setList] = useState([1, 2, 3, 4, 5]);

  const memorizedList = useMemo(() => {
    return list;
  }, [list]);

  const handleListChange = () => {
    setList([...list], 6);
  };

  return (
    <div className="App">
      <header className="App-header">
        {list.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        <button onClick={handleListChange}>button</button>
      </header>
    </div>
  );
}

export default App;
