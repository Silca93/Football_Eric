import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Players from './Players.jsx';
import Teams from './Teams.jsx';


export default function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={App} />
          <Route path='/allteams' Component={Teams} />
          <Route path='/allplayers' Component={Players} />

        </Routes>

      </Router>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>,
)
