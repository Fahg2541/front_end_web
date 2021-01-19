import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import SiteNavbar from './Components/SiteNavbar';
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
import Search from './Pages/Search';
import WomanShoes from './Pages/WomanShoes';
import MenShoes from './Pages/MenShoes';

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
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/basket">
            <Basket/>
          </Route>
          <Route path="/homepage">
            <HomePage/>
          </Route>
          <Route path="/womanShoes">
            <WomanShoes/>
          </Route>
          <Route path="/menShoes">
            <MenShoes/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
