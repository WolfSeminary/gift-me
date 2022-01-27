import "./App.css";
import GiftNote from "./GiftNote";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <GiftNote></GiftNote>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Deploy-work!!
        </p>
      </header>
    </div>
  );
}

export default App;
