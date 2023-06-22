import React from 'react';
import Home from '../pages/Home';
import Color from '../pages/color/Color';
import ShadeTint from '../pages/color/ShadeTint';
import ColorUsage from '../pages/color/ColorUsage';
import Typography from '../pages/Typography';
import {
  Routes,
  Route,
} from "react-router-dom";

const Content = () => {
  return (
    <div className='Content'>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/color" element={<Color />} ></Route>
            <Route path="/shadetint" element={<ShadeTint />} ></Route>
            <Route path="/colorusage" element={<ColorUsage />} ></Route>
            <Route path="/typography" element={<Typography />} ></Route>
        </Routes>
  </div>
  );
};

export default Content;