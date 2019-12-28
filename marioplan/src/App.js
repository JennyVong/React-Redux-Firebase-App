import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Components/layout/Navbar'
import Dashboard from './Components/dashboard/Dashboard'
import ProjectDetails from './Components/projects/ProjectDetails'
import signin from './Components/Auth/signin'
import signup from './Components/Auth/signup'
import CreateProject from './Components/projects/CreateProjects'

class App extends Component {
  render () {
    return (
     <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path = '/' component = {Dashboard} />
            <Route path = '/projects/:id' component = {ProjectDetails} />
            <Route path = '/signin' component = {signin} />
            <Route path = '/signup' component = {signup} />
            <Route path = '/createproject' component = {CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
