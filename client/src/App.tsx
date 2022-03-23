
import './App.css';
import { useEffect, useState } from "react";
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
import { useStoreContext } from './context/StoreContext';
import { getCookie } from './util/util';
import agent from './features/api/agent';
import LoadingComponent from './components/LoadingComponent';
import CheckoutPage from './pages/CheckoutPage';

function App() {

  const {setBasket} = useStoreContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buyerId = getCookie('buyerId');
    if(buyerId) {
      agent.Basket.get()
      .then(basket => setBasket(basket))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
    } else{
      setLoading(false);
    }
  }, [setBasket])

    if(loading) return <LoadingComponent message="Loading.."></LoadingComponent>

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
        <Route exact path='/checkout' component={CheckoutPage}></Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
