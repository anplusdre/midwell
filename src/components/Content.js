import React from 'react';
import Home from './Home';
import Color from './Color';
import Typography from './Typography';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const Content = () => {
  return (
    <div className='Content'>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/color" element={<Color />} ></Route>
            <Route path="/typography" element={<Typography />} ></Route>
        </Routes>
  </div>
  );
};

export default Content;