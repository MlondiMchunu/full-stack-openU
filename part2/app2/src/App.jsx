import {useState} from 'react'
import Note from './components/Note'
//import './App.css'

const App = (props) => {

  const [note, setNotes] = useState(props.notes)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App