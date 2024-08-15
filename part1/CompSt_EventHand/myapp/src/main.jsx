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

let counter = 1

const refresh = () => {


  setInterval(() => {
    refresh()
    counter += 1
    refresh()
    counter += 1
    refresh()
  }, 3000)

  ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App counter = {counter} />
    </StrictMode>
  )
}




