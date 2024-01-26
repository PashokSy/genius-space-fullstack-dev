import { ClassicCss } from './7_lessen_components/ClassicCss';
import { InlineCss } from './7_lessen_components/InlineCss';
import { ModuleCss } from './7_lessen_components/ModuleCss';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <InlineCss isHighlighted={true} isPrimary={true} />
        <ClassicCss isHighlighted={true} />
        <ModuleCss />
      </header>
    </div>
  );
}

export default App;
