import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import App from './App'
import './index.css'

/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
  */

//console.log(counter)

let counter = 1

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App counter={counter} />
    </StrictMode>
  )
}

setInterval(() => {
  refresh()
  counter += 1
}, 3000)

setInterval(() => {
  refresh()
  counter += 1
}, 3000)

setInterval(() => {
  refresh()
  counter += 1
}, 3000)




