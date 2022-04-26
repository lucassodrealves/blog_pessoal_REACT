import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './paginas/home/home'
let name='lucas'
function App() {
  return (
       <Home/>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Bem vindo a um projeto REACTJS {name}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>*/
  )
}

export default App;
