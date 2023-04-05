import React from 'react'
import ReactDOM from 'react-dom/client'
import { GitExpertApp } from './App'
import "./style.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GitExpertApp />
  </React.StrictMode>,
)
