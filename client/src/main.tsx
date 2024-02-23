import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppWrapper } from './app/AppWrapper.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>,
)
