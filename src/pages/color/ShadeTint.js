import React from 'react';
import copyIcon from '../../assets/copy.svg';
import colors from './Colorpalette.json';
import CopyToClipboard from '../../components/CopyClipboard'

const ColorCard = ({ background, color, contrast, hex, colorName, colorNumbers, contrastColor }) => {

  return (
    <div className='cards colors'>
      
      <div className='colorBox' style={{ background }}>
        <div className='overlay' onClick={() => CopyToClipboard(hex)} >
          <img src={copyIcon} alt="Copy" />
          <div className='colorHex' style={{ color: "#FFFFFF" }}>
          {hex}
          </div>
        </div>
        <div className='colorName' style={{ color }}>
          {colorName}
        </div>
      </div>
      <div className='colorInfo'>
        <div className='colorNumbers' onClick={() => CopyToClipboard(background)} >{background}
          <div className='overlay' onClick={() => CopyToClipboard(background)} style={{ background : "var(--dark-bg)" }}>
          </div>
        </div>
      </div>
      
    </div>
  );
};

const ShadeTint = () => {
  const { base, grey, primary, secondary, positive, caution, negative, } = colors;

  return (
    <>
      <div className='colorPalette'>
        <div className='cardTitle'><div className='baseIcon'></div>Base Colors</div>
        <div className='cardSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className='cardsGrid'>
          {base.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className='cardTitle'><div className='grIcon'></div>Grey Color</div>
        <div className='cardSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className='cardsGrid'>
          {grey.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className='cardTitle'><div className='prmIcon'></div>Primary Color</div>
        <div className='cardSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className='cardsGrid'>
          {primary.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className='cardTitle'><div className='secIcon'></div>Secondary Color</div>
        <div className='cardSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className='cardsGrid'>
          {secondary.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className='cardTitle'><div className='posIcon'></div>Positive Color</div>
        <div className='cardSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className='cardsGrid'>
          {positive.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className='cardTitle'><div className='cauIcon'></div>Caution Color</div>
        <div className='cardSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className='cardsGrid'>
          {caution.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className='cardTitle'><div className='negIcon'></div>Negative Color</div>
        <div className='cardSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className='cardsGrid'>
          {negative.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

      </div>
    </>
  );
};

export default ShadeTint;
