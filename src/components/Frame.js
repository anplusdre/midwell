import React, { useState } from 'react';
import Logo from '../assets/midwell_logo.svg';
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import Content from './Content';

const Navigation = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  

  return (
    <Router>
      
      <div className="header">
        <div className="container">
          <NavLink to="/" className='logo'><img src={Logo}/></NavLink>
        </div>
    </div>
      <div className='container'>
        <div className='Grid'>

        <div className="navigation">
        <div className="list">
            <div className="nav-head">Guides</div>
            <ul>
                <li><NavLink to="/" activeclassname="active">Overview</NavLink></li>
                <li><NavLink to="/color" activeclassname="active" className={`hasDropDown ${isDropdownOpen ? 'down' : 'right'}`} onClick={handleDropdownToggle}>Colors</NavLink>
                    <div className={`nav-dropdown ${isDropdownOpen ? 'open down' : ''}`}>
                        <ul>
                            <li><NavLink to="/shadetint">Shade & Tint</NavLink></li>
                            <li><NavLink to="/colorusage">Usage</NavLink></li>
                        </ul>
                    </div>
                </li>
                <li><NavLink to="/typography">Typography</NavLink></li>
            </ul>
        </div>
        <div className="list">
            <div className="nav-head">Components</div>
            <ul>
                <li><NavLink to="/buttons">Buttons</NavLink></li>
                <li><NavLink to="/labels">Labels</NavLink>
                </li>
                <li><NavLink to="/checkboxes">Checkboxes</NavLink></li>
                <li><NavLink to="/accordion">Accordion</NavLink></li>
            </ul>
        </div>
      </div>
      <Content />
        </div>
      </div>
    </Router>
  );
};

export default Navigation;