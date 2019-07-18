import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Home from './Home';
import AllCountries from './AllCountries';
import AllAircrafts from './AllAircrafts';
import NotFound from './NotFound'


const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <img src="https://i.warbycdn.com/v/c/assets/navigation/image/email-capture/1/96a760c4c2.png"/>
          Dimon Flights
        <div id="navbarId">
            <div id="nav-left">
              <Link to="/" className="navlink">Home</Link>
            </div>
            <div id="nav-left">
              <Link to="/Countries" className="navlink">Countries</Link>
            </div>
            <div id="nav-left">
              <Link to="/Aircrafts" className="navlink">Aircrafts</Link>
            </div>
        </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Aircrafts" component={AllAircrafts}/>
          <Route exact path="/Countries" component={AllCountries}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  )
}


export default Root
