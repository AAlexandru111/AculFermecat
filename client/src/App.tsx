
import './App.css';
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Navbar from './components/Navbar'
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/products' component={Products}></Route>
        </Switch>
    </div>
  );
}

export default App;
