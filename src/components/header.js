import React from 'react';
import Logo from '../assets/midwell_logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';

const Header = () => {
  return (
    <div className="header">
        <div className="container">
        <Router>
          <Link to="/" className='logo'><img src={Logo}/></Link>
        </Router>
        </div>
    </div>
  );
};

export default Header;