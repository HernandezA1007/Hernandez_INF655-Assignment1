// Antonio Hernandez
// INF655
// Muvva
// 2-16-23

// import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoApp from './pages/TodoApp';


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

function App() {
  return (
    <div className="App">
      <TodoApp />
    </div>
  );
}

export default App;