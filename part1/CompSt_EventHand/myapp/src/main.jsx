import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


let counter = 1

const refresh = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
      <App counter={counter} />
    </StrictMode>
  )
}
