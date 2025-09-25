import logo from './IMG_3BC8DAC2E25C-1.jpeg';
import './App.css';
import Hello from './hello.jsx';
import Goodbye from './goodbye.jsx';
import JSXExamples from './component/JSXExamples.jsx';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Hello />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          moodeng
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Goodbye />
      <JSXExamples />
    </div>
  );
}

export default App;
