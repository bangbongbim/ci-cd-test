import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  function getHello() {
    const greet = document.getElementById('greet');
    fetch('http://localhost:4000/api/hello')
      .then((response) => response.json())
      .then((data) => (greet.innerHTML = JSON.stringify(data)));
  }
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    getHello();
  }, []);

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p>
          api called: <code id='greet'></code>
        </p>
      </div>
      <p className='read-the-docs'>박상민은 신인가 ?</p>
    </div>
  );
}

export default App;
