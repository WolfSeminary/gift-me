import './App.css';
import logo from './logo.svg';
import GiftNote from './GiftNote';

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Deploy-work!!
        </p>
      </header>    <GiftNote/>

    </div>
  );
}

export default App;
