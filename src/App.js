import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EreFrancis from './EreFrancis';
import NoMatch from './NoMatch';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={EreFrancis} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
