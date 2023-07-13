
import React, { useState } from 'react';
import styles from '../styles/mw.module.css';
import Logo from '../assets/midwell_logo.svg';
import ContentTable from './ContentTable';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
} from "react-router-dom";
import Content from './Content';

const Navigation = () => {
  

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);

    setIsActive(!isActive);
  };

  const dropActive = ({ isActive }) => isActive ? styles.active : styles.nav_link;


  return (
    <Router>
      <div className={styles.header}>
        <div className={styles.container}>
          <div className={styles.identityBar}>
            <NavLink to="/" className={styles.logo}><img src={Logo} alt="Logo" /></NavLink>
            <div style={{ font: 'var(--single-14-rg)' }}>Powered by Deltadata Mandiri</div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.Grid}>
          <div className={styles.navigation}>
            <div className={styles.list}>
              <div className={styles['nav-head']}>Guides</div>
              <ul>
                <li><NavLink to="/" className={dropActive}>Overview</NavLink></li>
                <li>
                  <NavLink
                    to="/color"
                    className={`${styles.hasDropDown} ${isDropdownOpen ? styles.down : styles.right} ${isActive ? styles.active : ' '}`}
                    onClick={handleDropdownToggle}
                  >
                    Colors
                  </NavLink>
                  <div className={`${styles['nav-dropdown']} ${isDropdownOpen ? styles.open : ' '} ${isDropdownOpen ? styles.down : styles.right}`}>
                    <ul>
                      <li><NavLink className={dropActive} to="/color/colorusage">Usage</NavLink></li>
                      <li><NavLink className={dropActive} to="/color/shadetint">Shade & Tint</NavLink></li>
                    </ul>
                  </div>
                </li>
                <li><NavLink className={dropActive} to="/typography">Typography</NavLink></li>
              </ul>
            </div>
            <div className={styles.list}>
              <div className={styles['nav-head']}>Components</div>
              <ul>
                <li><NavLink className={dropActive} to="/comp/buttons">Buttons</NavLink></li>
                <li><NavLink className={dropActive} to="/comp/buttonsgroup">Buttons Group</NavLink></li>
                <li><NavLink className={dropActive} to="/comp/labels">Labels</NavLink></li>
                <li><NavLink className={dropActive} to="/checkboxes">Checkboxes</NavLink></li>
                <li><NavLink className={dropActive} to="/accordion">Accordion</NavLink></li>
              </ul>
            </div>

            <div className={styles.list}>
              <div className={styles['nav-head']}>React Components</div>
            </div>
          </div>

          <Content />
        </div>
      </div>
    </Router>
  );
};

export default Navigation;