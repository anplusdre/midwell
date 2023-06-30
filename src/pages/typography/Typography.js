import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import Headings from './typo';

const Typography = () => {
  return (
    <div className='ctWr'>
      <div className='ctHd'>
        {/* <div className='ctTl'>Typography</div>
        <div className='ctSt'>
          Midwell comprehensive documentation and examples for typography, covering various aspects such as global settings, headings, body text, lists, and more. It offers a wide range of typographic styles and utilities to enhance the visual appeal and readability of your web pages.
        </div> */}
        <div className='ctBd'>
          <div style={{ color: 'var(--white)', fontSize: '64px', fontWeight: '500', marginTop: '48px' }}>Proxima Nova</div>
          <div style={{ color: 'var(--disable-02)', fontSize: '16px', fontWeight: '400', marginTop: '16px', lineHeight: 'var(--paragraph)' }}>
            Released in 2005, Proxima Nova is an extremely popular typeface designed by Mark Simonson. It is often described as a hybrid of Futura and Akzidenz Grotesk, combining a geometric appearance with modern proportions.
          </div>
          <div className='codeBlock top-16'>
            <pre className='codeBlockWrapper hollow'>
              <div className='codeBlockHeader hollow'>
                Headings
              </div>
              <div className='typography'>
                <div className='headingTypo'>
                  <h1>Comparison is the thief of joy</h1>
                  <h2>Comparison is the thief of joy</h2>
                  <h3>Comparison is the thief of joy</h3>
                  <h4>Comparison is the thief of joy</h4>
                  <h5>Comparison is the thief of joy</h5>
                </div>
              </div>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
