import React from 'react';
import ColorTable from './ColorTable';
import ColorData from './ColorData.json'

const ColorUsage = () => {
  return (
    <div>
      <div className='colorUsage'>
      <div className='ctWr'>
      <div className='ctHd'>
        <div className='ctTl'>Usage</div>
        <p>
           These palette covers all the basic color use across all elements in this design system. There are Base, Grey, Accent, and Semantic Palette in this design system. Each of these color have it's own Tints and Shades which to provide multiple uses.
        </p>
        <img className='top-16' src='../assets/ColorUsage.png'></img>
      </div>
      
      <div className='ctBd'>
      <ColorTable
        title={ColorData.basePalette.title}
        banner={ColorData.basePalette.banner}
        description={ColorData.basePalette.description}
        colors={ColorData.basePalette.colors}
      />
      
      <ColorTable
        title={ColorData.greyPalette.title}
        banner={ColorData.greyPalette.banner}
        description={ColorData.greyPalette.description}
        colors={ColorData.greyPalette.colors}
      />
      <ColorTable
        title={ColorData.AccPalette.title}
        banner={ColorData.AccPalette.banner}
        description={ColorData.AccPalette.description}
        colors={ColorData.AccPalette.colors}
      />
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