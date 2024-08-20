import logo from './logo.svg';
import './App.css';

const App = (props) => {
  const {notes} = props
  return (
    <>
      <div className="App">
      </div>
      <div>
        <h1>Notes</h1>
        <ul>
          <li>{notes[0].content}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
