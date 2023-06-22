import React from 'react';
import Home from '../pages/Home';
import Color from '../pages/Color';
import Typography from '../pages/Typography';
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