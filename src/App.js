import logo from './logo.svg';
import './App.css';

function MyComponent({name}) {
  return <p>Hello, {name}!</p>;
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyComponent name="Kavin" />
      </header>
    </div>
  );
}

export default App;
