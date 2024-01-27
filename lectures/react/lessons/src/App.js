import { ComplexForm } from './8_lesson_components/ComplexForm';
import { ControlledForm } from './8_lesson_components/ControlledForm';
import { UserForm } from './8_lesson_components/UserForm';
import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const lastName = form.elements.lastName.value;

    console.log({ name, lastName });

    // ... process data
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Forms</h1>
        <h2>Simple Form</h2>
        <UserForm handleSubmit={handleSubmit} />
        <h2>Controlled Form</h2>
        <ControlledForm />
        <h2>Complex Form</h2>
        <ComplexForm />
      </header>
    </div>
  );
}

export default App;
