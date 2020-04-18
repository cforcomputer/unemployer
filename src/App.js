import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import Statistics from './components/Statistics';
import About from './components/About';
import Map from './components/Map';
import Navigation from './components/Navbar';
import Error from './components/Error';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navigation />
              <Switch>
                {/* Pages */}
                <Route path="/" component={Statistics} exact />
                <Route path="/about" component={About} />
                <Route path={"/map"} component={Map} />
                <Route component={Error}/>
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
