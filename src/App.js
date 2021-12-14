import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      <main>
        <div>titlehere</div>
        <div>description on how to play</div>
        <div>
          Score: <span>0</span>
        </div>
        <div>
          Best Score: <span>0</span>
        </div>
        <div className="cards-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
}

export default App;
