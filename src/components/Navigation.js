import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Content from './Content';

const Navigation = () => {
  return (
    <Router>
      <div className="navigation">
        <div className="list">
            <div className="nav-head">Guides</div>
            <ul>
                <li><NavLink to="/" activeclassname="active">Overview</NavLink></li>
                <li><NavLink to="/color" activeclassname="active">Colors</NavLink>
                    <div className='nav-dropdown'>
                        <ul>
                            <li><NavLink to="/colorshade">Shade & Tint</NavLink></li>
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
    </Router>
  );
};

export default Navigation;