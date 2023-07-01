import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import Palette from './Palette'

const Color = () => {
  return (
    <div>
      <div className='colorUsage'>
      <div className='ctWr'>
      <div className='ctHd'>
        <div className='ctTl btm-24'>How to use</div>
        <p>Download and put midwell file to your css folder, after that you can include <span style={{color : 'var(--caution-05)'}}>color.css</span> on your main css file by using <code>@import './color.css';</code>. then you can call it's variables
            using <code>var(--x)</code> in your class styles. See example below.
        </p>
      </div>

          <div className='codeBlock'>
            <pre className='codeBlockWrapper'>
              <div className='codeBlockHeader'>
                color.css
                <div className='codeAction'>
                  <div className='iconBox'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='iconStyle' d="M11.5 4.5V2.75C11.5 2.28587 11.3156 1.84075 10.9874 1.51256C10.6592 1.18437 10.2141 1 9.75 1H2.75C2.28587 1 1.84075 1.18437 1.51256 1.51256C1.18437 1.84075 1 2.28587 1 2.75V9.75C1 10.2141 1.18437 10.6592 1.51256 10.9874C1.84075 11.3156 2.28587 11.5 2.75 11.5H4.5M6.25 4.5H13.25C14.2165 4.5 15 5.2835 15 6.25V13.25C15 14.2165 14.2165 15 13.25 15H6.25C5.2835 15 4.5 14.2165 4.5 13.25V6.25C4.5 5.2835 5.2835 4.5 6.25 4.5Z" stroke="#81848A" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                  </div>
                </div>
              </div>
                <CodeBlock text={`@import './color.css';

.header {
  background: var(--primary-05);
}

`} language="scss" showLineNumbers={false} theme={dracula} />
            </pre>
          </div>
      
      <div className='ctBd'>
          <div className='codeBlock'>
            <pre className='codeBlockWrapper'>
              <div className='codeBlockHeader'>
                color.css
                <div className='codeAction'>
                  <div className='iconBox'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className='iconStyle' d="M1 15H15M8 9.75V1M8 9.75L11.5 6.25M8 9.75L4.5 6.25" stroke="#81848A" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className='iconBox'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='iconStyle' d="M11.5 4.5V2.75C11.5 2.28587 11.3156 1.84075 10.9874 1.51256C10.6592 1.18437 10.2141 1 9.75 1H2.75C2.28587 1 1.84075 1.18437 1.51256 1.51256C1.18437 1.84075 1 2.28587 1 2.75V9.75C1 10.2141 1.18437 10.6592 1.51256 10.9874C1.84075 11.3156 2.28587 11.5 2.75 11.5H4.5M6.25 4.5H13.25C14.2165 4.5 15 5.2835 15 6.25V13.25C15 14.2165 14.2165 15 13.25 15H6.25C5.2835 15 4.5 14.2165 4.5 13.25V6.25C4.5 5.2835 5.2835 4.5 6.25 4.5Z" stroke="#81848A" strokeWidth="1.3" strokeLinejoin="round"/>
                  </svg>
                  </div>
                </div>
              </div>
              <CodeBlock text={Palette} language="css" showLineNumbers={false} theme={dracula} />
            </pre>
          </div>
        </div>
    </div>
      </div>
    </div>
  );
};

export default Color;