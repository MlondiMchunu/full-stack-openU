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

  ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App/>
    </StrictMode>
  )





