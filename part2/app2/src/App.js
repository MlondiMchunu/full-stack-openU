import logo from './logo.svg';
import './App.css';

const App = () => {

  //const { notes } = props

  const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only Javascript',
      important: false
    }, {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      important: true
    }
  ]

  const result = notes.map((note)=>note.content)

  console.log(result)

  //console.log("Hello ", notes[1].content)
  return (
    <>
      <div>

        <div>
          <h1 className='App'>Notes</h1>
          <ul>
            {/*<li>{notes[0].content}</li>
          <li>{notes[1].content}</li>
          <li>{notes[2].content}</li>*/}
            {notes.map((note) =>
              <Note key={note.id} note={note}/>)}
          </ul>
        </div>
      </div>
    </>
  );
}


export default App;
