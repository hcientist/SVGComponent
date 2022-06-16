import logo from './logo.svg';
import './App.css';
import SVGComponent from './SVGComponent';

function App() {
  return (
    <div className="App">
      <a href="https://github.com/hcientist/SVGComponent/tree/main/src">
        Source
      </a>
      <header
        className="App-header"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <SVGComponent part="dog" style={{ stroke: "#fff" }} />
        <SVGComponent
          part="dog"
          style={{ stroke: "#fff" }}
          click={() => console.log("override clickhandler")}
        />
        <SVGComponent part="logo" />
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
      </header>
    </div>
  );
}

export default App;
