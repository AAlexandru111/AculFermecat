
import './App.css';
import { useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
       <Switch>
          <Route exact path='/' component={}></Route>
        </Switch>
    </div>
  );
}

export default App;
