import React, { useState } from 'react';
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
      <div className="navigation">
        <div className="list">
            <div className="nav-head">Guides</div>
            <ul>
                <li><NavLink to="/" activeclassname="active">Overview</NavLink></li>
                <li><NavLink to="/color"  activeclassname="active" onClick={handleDropdownToggle}>Colors</NavLink>
                    <div className={`nav-dropdown ${isDropdownOpen ? 'open' : ''}`}>
                        <ul>
                            <li><NavLink to="/shadetint">Shade & Tint</NavLink></li>
                            <li><NavLink to="/colorusage">Usage</NavLink></li>
                        </ul>
                    </div>
                </li>
                {/* <li><NavLink to="/typography">Typography</NavLink></li> */}
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
    </Router>
  );
};

export default Navigation;