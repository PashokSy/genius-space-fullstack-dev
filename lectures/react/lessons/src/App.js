import { Route, Routes, Link } from 'react-router-dom';
import './App.css';
import { Home } from './10_lesson_components/Home';
import { Contact } from './10_lesson_components/Contact';
import { About } from './10_lesson_components/About';
import { NotFoundPage } from './10_lesson_components/NotFoundPage';

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
