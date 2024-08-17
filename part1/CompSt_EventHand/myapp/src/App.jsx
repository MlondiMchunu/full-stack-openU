import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const App = () => {

  const model = "Lambo"
  const year = 1970

  //const [counter, setCounter] = useState(0)
  //console.log('rendering with counter value ', counter)

  //complex state, 2 pieces of state
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  //setTimeout(() => setCounter(counter + 1), 2000)//react re-renders the component when setCounter is called 

  const addOne = () => {
    console.log('increasing, value before ', counter)
    setCounter(counter + 1)
  }

  const subOne = () => {
    console.log('decreasing, value before ', counter)
    setCounter(counter - 1)
  }

  const reset = () => {
    console.log('resetting to zero, value before ', counter)
    setCounter(0)
  }

  console.log('rendering...', counter)

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>
      <div className="App">
        <header>

        </header>

        <div>
          <h1> Car Stock</h1>
          <Car model="Porsche" year={2022} />
          <Car model={model} year={year} />
        </div>
        <div>
          <Display counter={counter} />
        </div>
        <div>
          -----------------------<br />

          <Button onClick={addOne} text='plus' />
          <Button onClick={reset} text='zero' />
          <Button onClick={subOne} text='minus' />

          <br />-----------------------
        </div>
      </div>

    </>
  );
}

const Display = (props) => {

  return (
    <>
      <div>Counter : {props.counter}</div>
    </>
  )
}

const Button = (props) => {

  return (
    <>
      <div>
        <button onClick={props.onClick}>
          {props.text}
        </button>
      </div>
    </>
  )
}

const Car = (props) => {

  /* Helper function to 
  guess yr of manufacture*/
  const manufactureYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.year
  }

  //Destructuring
  const { model, year } = props
  return (
    <>
      <div>
        <p>Model: {props.model} <br /> Year: {props.year}</p>
        <p><label>Destructuring ; </label>Model: {model} Year: {year}</p>
        <p>The car is {manufactureYear()} years old.</p>
      </div>
    </>
  )
}

export default App
