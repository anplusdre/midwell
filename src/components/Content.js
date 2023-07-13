import React from 'react';
import Home from '../pages/Home';
import Color from '../pages/color/Color';
import ShadeTint from '../pages/color/ShadeTint';
import ColorUsage from '../pages/color/ColorUsage';
import Typography from '../pages/typography/Typography';
import styles from '../styles/mw.module.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import ButtonsComp from '../pages/comp/buttons/ButtonsComp';
import LabelsComp from '../pages/comp/Labels/LabelsComp';
import ButtonsGroup from '../pages/comp/buttonsgroup/ButtonsGroup';

const Content = () => {
  return (
    <div className={styles.Content}>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/color" element={<Color />} ></Route>
            <Route path="/color/shadetint" element={<ShadeTint />} ></Route>
            <Route path="/color/colorusage" element={<ColorUsage />} ></Route>
            <Route path="/typography" element={<Typography />} ></Route>
            <Route path="/comp"></Route>
            <Route path="/components/buttons" element={<ButtonsComp />} ></Route>
            <Route path="/components/buttonsgroup" element={<ButtonsGroup />}> </Route>
            <Route path="/components/labels" element={<LabelsComp />}> </Route>
        </Routes>
  </div>
  );
};

export default Content;