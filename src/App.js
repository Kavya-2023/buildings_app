import React from 'react';
import './App.css';
import One from './components/One';
import Two from './components/Two';
import Three from './components/Three';
import Four from './components/Four';
import Five from './components/Five';
import Six from './components/Six';
import CityTabs from './components/CityTabs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CityTabs} />
        <Route exact path="/one" component={One} />
        <Route exact path="/two" component={Two} />
        <Route exact path="/three" component={Three} />
        <Route exact path="/four" component={Four} />
        <Route exact path="/five" component={Five} />
        <Route exact path="/six" component={Six} />
      </Switch>
    </Router>
  );
}

export default App;