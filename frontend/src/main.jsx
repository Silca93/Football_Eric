import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Players from './Players.jsx';
import Teams from './Teams.jsx';
import UpdateTeam from './UpdateTeam.jsx';
import AdminPlayers from './AdminPlayers.jsx';
import AdminTeams from './AdminTeams.jsx';
import Details from './Details.jsx';

export default function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={App} />
          <Route path='/allteams' Component={Teams} />
          <Route path='/allplayers' Component={Players} />
          <Route path="/update_team" Component={UpdateTeam}/>
          <Route path="/admin_team" Component={AdminTeams}/>
          <Route path="/admin_players" Component={AdminPlayers}/>
          <Route path="/player_details/:id" Component={Details}/>

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
