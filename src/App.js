import React from 'react'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home/Home'
import Sports from './Components/Sport/Sports'
import Matches from './Components/Matches'
import Admin from './Components/Admin'
import Team from './Components/Team'
import League from './Components/League'
import SeasonMatch from './Components/SeasonMatch'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter,
} from 'react-router-dom'

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sports" component={Sports} />
          <Route path="/matches" component={Matches} />
          <Route path="/admin" component={Admin} />
          <Route path="/team/:id" component={Team} />
          <Route path="/season/:id" exact component={SeasonMatch} />
          <Route path="/league/:id" exact component={League} />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
