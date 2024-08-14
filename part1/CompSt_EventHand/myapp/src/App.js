import logo from './logo.svg';
import './App.css';

function App() {
  const model = "Lambo"
  const year = 1970
  return (
    <div className="App">
      <header className="App-header">
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

      <div>
        <h1> Car Stock</h1>
        <Car model="Porsche" year={2022} />
        <Car model={model} year={year} />
      </div>
    </div>
  );
}

const Car = (props) => {

  /* guesses yr of manufacture*/
  const manufactureYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.year
  }
  return (
    <>
      <div>
        <p>Model: {props.model} <br/> Year: {props.year}</p>
        <p>The car is {manufactureYear()} years old.</p>
      </div>
    </>
  )
}

export default App;
