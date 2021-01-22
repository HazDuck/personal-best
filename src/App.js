import React from 'react';
import logo from './logo.svg';
import './App.css';
import { installToHomepage } from './installToHomepage';

function App() {
  installToHomepage()
  return (
    <div className="App">
      <link rel="manifest" href="/manifest.json"></link>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button data-button-install style={{display: 'none'}}>INSTALL</button>
        <h1>PERSONAL BEST</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
