import React, {Component} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'

import Statistics from './components/Statistics';
import About from './components/About';
import Map from './components/Map';
import Guides from './components/Guides';
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
                <Route path={"/map"} component={Map} />
                <Route path={"/guides"} component={Guides} />
                <Route path="/about" component={About} />
                <Route component={Error}/>
              </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
