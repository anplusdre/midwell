import React from 'react';
import ColorTable from './ColorTable';
import ColorData from './ColorData.json'
import styles from '../../styles/mw.module.css'
import midwell from '../../styles/midwell.module.css'


const ColorUsage = () => {
  return (
    <div>
      <div className={styles.colorUsage}>
      <div className={styles.ctWr}>
      <div className={styles.ctHd}>
        <div className={styles.ctTl}>Usage</div>
        <p>
           These palette covers all the basic color use across all elements in this design system. There are Base, Grey, Accent, and Semantic Palette in this design system. Each of these color have it's own Tints and Shades which to provide multiple uses.
        </p>
        <img className={midwell['top-16']} src='../assets/ColorUsage.png'></img>
      </div>
      
      <div className={styles.ctBd}>
      <ColorTable
        title={ColorData.basePalette.title}
        banner={ColorData.basePalette.banner}
        description={ColorData.basePalette.description}
        colors={ColorData.basePalette.colors}
      />

      <hr />
      
      <ColorTable
        title={ColorData.greyPalette.title}
        banner={ColorData.greyPalette.banner}
        description={ColorData.greyPalette.description}
        colors={ColorData.greyPalette.colors}
      />

      <hr />


      <ColorTable
        title={ColorData.AccPalette.title}
        banner={ColorData.AccPalette.banner}
        description={ColorData.AccPalette.description}
        colors={ColorData.AccPalette.colors}
      />

      <hr />

      <ColorTable
        title={ColorData.SemPalette.title}
        banner={ColorData.SemPalette.banner}
        description={ColorData.SemPalette.description}
        colors={ColorData.SemPalette.colors}
      />
      </div>
    </div>
      </div>
    </div>
  );
};

export default ColorUsage;