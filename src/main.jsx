import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FlagsVariables } from './useFlags.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FlagsVariables>
      <App />
    </FlagsVariables>
  </React.StrictMode>,
)
