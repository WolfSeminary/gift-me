import './App.css';
import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom'
import Gift from './Gift';
import Gifts from './Gifts';

function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/gift" element={<Gift/>} />
      </Routes>
      <Gifts/>

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
