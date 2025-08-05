import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState("Welcome to My Unique React App! 🎨");
  const [isSpinning, setIsSpinning] = useState(true);
  const [bgColor, setBgColor] = useState('#282c34');
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  const toggleSpin = () => setIsSpinning(!isSpinning);

  const toggleBackground = () => {
    const colors = ['#282c34', '#1e1e1e', '#003366', '#0f2027', '#4b0082'];
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(newColor);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App" style={{ backgroundColor: bgColor, transition: '0.5s' }}>
      <header className="App-header">
        <img 
          src={logo} 
          className={isSpinning ? "App-logo" : "App-logo-paused"} 
          alt="logo" 
        />
        <h1>{message}</h1>
        <p>The current time is: <strong>{time}</strong></p>

        <div style={{ marginTop: '20px' }}>
          <button onClick={() => setMessage("You're exploring React like a pro! 🚀")} className="custom-button">
            Inspire Me
          </button>
          <button onClick={toggleSpin} className="custom-button">
            {isSpinning ? 'Pause Logo' : 'Spin Logo'}
          </button>
          <button onClick={toggleBackground} className="custom-button">
            Change Background
          </button>
        </div>

        <div style={{ marginTop: '30px' }}>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn JavaScript
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
