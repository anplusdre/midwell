import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Content from './Content';

const Navigation = () => {
  return (
    <Router>
      <div className="navigation">
        <div className="list">
            <div className="nav-head">Guides</div>
            <ul>
                <li><Link to="/">Overview</Link></li>
                <li><Link to="/color">Colors</Link></li>
                <li><Link to="/typography">Typography</Link></li>
            </ul>
        </div>
        <div className="list">
            <div className="nav-head">Components</div>
            <ul>
                <li><Link to="/buttons">Buttons</Link></li>
                <li><Link to="/labels">Labels</Link></li>
                <li><Link to="/checkboxes">Checkboxes</Link></li>
                <li><Link to="/accordion">Accordion</Link></li>
            </ul>
        </div>
      </div>
      <Content />
    </Router>
  );
};

export default Navigation;