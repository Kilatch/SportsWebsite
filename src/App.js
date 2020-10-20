import React from 'react'
import './App.css'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Sports from './Components/Sports'
import Matches from './Components/Matches'
import About from './Components/About'
import Team from './Components/Team'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sports" component={Sports} />
          <Route path="/matches" component={Matches} />
          <Route path="/about" component={About} />
          <Route path="/team/:id" component={Team} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
