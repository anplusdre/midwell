import React from 'react';
import copyIcon from '../../assets/copy.svg';
import colors from './palette.json';

const ColorCard = ({ background, color, contrast, hex, colorName, colorNumbers }) => {
  const handleCopyToClipboard = (value) => {
    navigator.clipboard.writeText(value)
      .then(() => {
        // Clipboard copied successfully, handle any desired logic here
      })
      .catch((error) => {
        console.error('Copy to clipboard failed:', error);
      });
  };

  return (
    <div className='cards colors'>
      <div className='colorBox' style={{ background }}>
        <div className='overlay'>
          <img src={copyIcon} onClick={() => handleCopyToClipboard(hex)} alt="Copy" />
        </div>
        <div className='colorName' style={{ color }}>
          {colorName}
        </div>
        <div className='contrastCheck' style={{ color: 'var(--grey)' }}>
          {contrast}
        </div>
      </div>
      <div className='colorInfo'>
        <div className='colorNumbers'>{colorNumbers}</div>
        <div className='colorHex'>{hex}</div>
      </div>
    </div>
  );
};

const ShadeTint = () => {
  const { base, primary } = colors;

  return (
    <>
      <div className='colorPalette'>
        <div className='cardTitle'>Base Colors</div>
        <div className='cardSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className='cardsGrid'>
          {base.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>

        <div className='cardTitle'>Primary Color</div>
        <div className='cardSubTitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className='cardsGrid'>
          {primary.map((color, index) => (
            <ColorCard key={index} {...color} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShadeTint;
