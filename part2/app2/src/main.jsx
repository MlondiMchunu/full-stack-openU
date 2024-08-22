import React from 'react'
import { StrictMode } from 'react'
import { ReactDOM, createRoot } from 'react-dom/client'
import './index.css'

import App from './components/App'


/*const notes = [
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
    */

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App notes={notes} />
    </StrictMode>
)