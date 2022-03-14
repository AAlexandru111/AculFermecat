
import './App.css';
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Products from './pages/Products.tsx';
import Navbar from './components/Navbar.tsx'
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
