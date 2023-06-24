import React from 'react';
import { CodeBlock } from 'react-code-blocks';
import Headings from './codes/Headings';

const Typography = () => {
  return (
    <div className='ctWr'>
      <div className='ctHd'>
        <div className='ctTl'>Typography</div>
        <div className='ctSt'>
          Midwell comprehensive documentation and examples for typography, covering various aspects such as global settings, headings, body text, lists, and more. It offers a wide range of typographic styles and utilities to enhance the visual appeal and readability of your web pages.
        </div>
        <div className='ctBd'>
          <div style={{ color: 'var(--white)', fontSize: '64px', fontWeight: '500', marginTop: '48px' }}>Proxima Nova</div>
          <div style={{ color: 'var(--grey-04)', fontSize: '16px', fontWeight: '400', marginTop: '16px', lineHeight: 'var(--paragraph)' }}>
            Released in 2005, Proxima Nova is an extremely popular typeface designed by Mark Simonson. It is often described as a hybrid of Futura and Akzidenz Grotesk, combining a geometric appearance with modern proportions.
          </div>
          <div className='codeBlock'>
            <pre className='codeBlockWrapper'>
              <div className='codeBlockHeader'>
                Headings
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 5V3C13 2.46957 12.7893 1.96086 12.4142 1.58579C12.0391 1.21071 11.5304 1 11 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V11C1 11.5304 1.21071 12.0391 1.58579 12.4142C1.96086 12.7893 2.46957 13 3 13H5M7 5H15C16.1046 5 17 5.89543 17 7V15C17 16.1046 16.1046 17 15 17H7C5.89543 17 5 16.1046 5 15V7C5 5.89543 5.89543 5 7 5Z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <CodeBlock text={Headings} language="css" showLineNumbers={true} />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
