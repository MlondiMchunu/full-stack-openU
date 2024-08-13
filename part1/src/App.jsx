import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {

  return (
    <>
      <div>
        <p>
          First Name : {props.fname} 
          <br/>
          Last Name : {props.lname}
        </p>
      </div>
    </>
  )
}

const App = () => {
  const [count, setCount] = useState(0)

  console.log("Hello from Component!!");

  const now = new Date()

  const a = 10
  const b = 20

  console.log(now, a + b)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <p>Hello New World!! It is {now.toString()}</p>
        <p> {a} plus {b} is {a + b} </p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h3>Greetings</h3>
      <Hello fname="Mlondi" lname="Mchunu"/>
      
    </>
  )
}

export default App
