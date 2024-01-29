import { Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import { NotFoundPage } from './10_lesson_components/NotFoundPage';
import { Suspense, lazy } from 'react';
import { AuthContext } from './12_lesson_components/AuthContext';
import { ChildComponent } from './12_lesson_components/ChildComponent';

const Home = lazy(() => import('./11_lesson_components/Home'));
const Contact = lazy(() => import('./11_lesson_components/Contact'));
const About = lazy(() => import('./11_lesson_components/About'));

function App() {
  const hello = 'Hello World!';

  return (
    <AuthContext.Provider value={hello}>
      <Suspense>
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
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
            <ChildComponent />
          </main>
        </>
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;
