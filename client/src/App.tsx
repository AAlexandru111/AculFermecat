
import './App.css';
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Navbar from './components/Navbar'
import { Container } from '@mui/material';
import ProductDetails from '../src/pages/ProductDetails';
import Footer from '../src/components/Footer'
import BasketPage from './pages/BasketPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route exact path='/products' component={Products}></Route>
        <Route exact path='/products/:id' component={ProductDetails}></Route>
        <Route exact path='/basket' component={BasketPage}></Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
