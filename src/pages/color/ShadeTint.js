import React from 'react';
import copyIcon from '../../assets/copy.svg';

const ShadeTint = () => {

  const handleCopyToClipboard = (value) => {
    navigator.clipboard.writeText(value)
      .then(() => {
        
      })
      .catch((error) => {
        console.error('Copy to clipboard failed:', error);
      });
  };

  return (
    <div className='colorPalette'>
          <div className='cards colors'>
            <div className='colorBox' style={{ background: 'var(--white)'}}>
              <div className='overlay'>
                <img src={copyIcon} onClick={() => handleCopyToClipboard('#FFFFFF')} alt="Copy" ></img>
              </div>
              <div className='colorName' style={{color: 'var(--black)'}}>
                White
              </div>
              <div className='contrastCheck' style={{color: 'var(--grey)'}}>AAA</div>

            </div>

            <div className='colorInfo'>
              <div className='colorNumbers'>
                256
              </div>
              <div className='colorHex'>
                #FFFFFF
              </div>
            </div>
          </div>
      </div>
  );
};

export default ShadeTint;