
import './App.css';
import Navbar from './Components/Navbar';
import SiteNavbar from './Components/SiteNavbar';
import Footer from './Components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Welcome from './Pages/Welcome';
import React from 'react';
import Login from './Pages/Login';
import Basket from './Pages/Basket';
import Profile from './Pages/Profile';
import Address from './Pages/Address';
import Search from './Pages/Search';
import Shoes from './Pages/Shoes';
import Status from './Pages/Status';
import WomanShoes from './Pages/WomanShoes';
import MenShoes from './Pages/MenShoes';
import Payment from './Pages/Payment';
import PaymentOnDestination from './Pages/PaymentOnDestination';
import DebitCard from './Pages/DebitCard';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Navbar />
        <SiteNavbar />

        <Switch>
          <Route path="/debit">
            <DebitCard />
          </Route>
          <Route path="/paymentondestination">
            <PaymentOnDestination/>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/address">
            <Address/>
          </Route>
          <Route path="/shoes">
            <Shoes />
          </Route>
          <Route path="/status">
            <Status />
          </Route>
          <Route path="/womanShoes">
            <WomanShoes />
          </Route>
          <Route path="/menShoes">
            <MenShoes />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App;
