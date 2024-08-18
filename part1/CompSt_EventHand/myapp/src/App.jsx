import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const App = () => {

  /****
   *----------------------------------------------------------------------
  const model = "Lambo"
  const year = 1970

  //const [counter, setCounter] = useState(0)
  //console.log('rendering with counter value ', counter)

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
  ----------------------------------------------
  ****/

  /*Two pieces of State */
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  /*Keeping track of total number of button presses*/
  const [total, setTotal] = useState(0)

  /***Array of all clicks***/
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }


  /*Single piece of State*/

  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClicks = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
  }

  const handleRightClicks = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1
    }
    setClicks(newClicks)
  }

  //Defining an event handler by using a function that returns a function
  const [value, setValue] = useState(12)

  const setToValue = (newValue) => () => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div className='App'>
      <div >
        <p>  2 Pieces of State :</p>
        {left}
        <button onClick={() => { setLeft(left + 1) }}>left</button>
        <button onClick={() => { setRight(right + 1) }}>right</button>
        {right}<p></p>
      </div>
      <div >
        Single Piece of State : <br />
        <p>{clicks.left}
          <button onClick={handleLeftClicks}>left</button>
          <button onClick={handleRightClicks}>right</button>
          {clicks.right}</p>
      </div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {right}
      </div>
      <div>

        {value + 1}
        <Button handleClick={() => setToValue(100)} text="thou" />
        <Button handleClick={() => setToValue(1)} text="reset" />
        <Button handleClick={() => setToValue(value + 1)} text="increment" />
      </div>

      <div>
        Handling Arrays:
        <p></p>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks.join(' ')}</p>
        <p>total : {total}</p>
      </div>
      <History allClicks={allClicks} />

      {/* <div>
        {value} <br />
        <button onClick={setToValue(1000)}>thousand</button>
        <button onClick={setToValue(0)}>reset</button>
        <button onClick={setToValue(value + 1)}>increment</button>


      </div>*/}
    </div>
  )
}

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div id='text'>
        the app is used by pressing the buttons!
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
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
        <button onClick={props.handleClick}>
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
