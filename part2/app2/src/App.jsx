import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

import noteService from './services/notes'
//import './App.css'

const Footer =()=>{
  const footerStyle ={
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return(
    <div style={footerStyle}>
      <br/>
      <em>Note app, Department of Computer Science, University of Helsinki 2024</em>
    </div>
  )
}

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage,setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  

   /*useEffect(()=>{
    console.log('effect')
    axios
    .get('http://localhost:3001/notes')
    .then(response=>{
      console.log('promise fulfilled!')
      setNotes(response.data)
    })
  },[])
  */

  //effect hook code written differently
  /*const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  } */

   //first parameter; the effect itself 
  //2nd parameter; how often the effect is run
  /*useEffect(hook, [])*/

  /**Below code is optimization of the above */
  useEffect(()=>{
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
        console.log("RESPOSE = ", initialNotes)
      })
      
  },[])

  console.log('render', notes.length, 'notes')


  const toggleImportanceOf = (id) => {
    //const url = `http://localhost:3001/notes/${id}`
    const note = notes.find((n) => { n.id === id })
    const changedNote = { ...note, important: !note.important }

    /*
    axios.put(url, changedNote).then(response => {
      setNotes(notes.map((n) => { n.id !== id ? n : response.data }))
    })
      */
    //console.log(`importance of ${id} needs to be toggled`)

    /**Below code is optimization of above after extracting 
     * communication module with backend */
     noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        alert(
          `The note ${note.content} was already deleted from server!`
        )
        setNotes(notes.filter((n)=>{
          n.id !== id
        }))
      })
  }

  /*const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
      
    }
    //console.log('button clicked', event.target)
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }*/

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    }
    if (noteObject.content == '') {
      console.log("This is an empty note!")
    } else {
  /*  axios
        .post('http://localhost:3001/notes', noteObject)
        .then(response => {

          setNotes(notes.concat(response.data))
          setNewNote('')
          console.log(response)
        })*/
       noteService
        .create(noteObject)
        .then(returnedNote =>{
          setNotes(notes.concat(returnedNote))
          setNewNote('')
        })
    }
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const handleLogin = (event)=>{
    event.preventDefault()
    console.log('logging in with', username, password)
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
      <Footer/>
    </div>
  )
}

export default App