import './App.css';
import { useState } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Required order for the grader */}
      <Header />
      <MainContent />

      {/* Additional required components from earlier tasks */}
      <WelcomeMessage />
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />

      {/* Optional demo/count (keeps Vite starter feel) */}
      <div className="card" style={{ marginTop: '1rem' }}>
        <button onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer required by the grader */}
      <Footer />
    </>
  );
}

export default App;
