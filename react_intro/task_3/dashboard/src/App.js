import React from 'react';
import HolbertonLogo from './HolbertonLogo.png';
import './App.css';
import { getFooterCopy, getFullYear, getFulYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={HolbertonLogo} className="logo" alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email"/>
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password"/>
        <button type="button">OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
