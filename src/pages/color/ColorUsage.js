import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import Palette from '../codes/Headings'
import Color from './Color';

const ColorUsage = () => {
  return (
    <div>
      <div className='colorUsage'>
      <div className='ctWr'>
      <div className='ctHd'>
        <div className='ctTl'>Usage</div>
        <div className='ctSt'>
          To implement this color palette on your project, you must first create a css for it. For example create a css file and name it&nbsp; <code className='whiteText'>color.css</code>.
          <p>and then copy the code below and paste it there. Or you can download <code className='whiteText'>color.css</code> from download button below.</p>
        </div>
        <div className='ctBd'>
          <div className='codeBlock'>
            <pre className='codeBlockWrapper'>
              <div className='codeBlockHeader'>
                color.css
                <div className='codeAction'>
                  <div className='iconBox'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className='iconStyle' d="M1 13H13M7 8.5V1M7 8.5L10 5.5M7 8.5L4 5.5" stroke="#040508" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className='iconBox'>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className='iconStyle' d="M10 4V2.5C10 2.10218 9.84196 1.72064 9.56066 1.43934C9.27936 1.15804 8.89782 1 8.5 1H2.5C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V8.5C1 8.89782 1.15804 9.27936 1.43934 9.56066C1.72064 9.84196 2.10218 10 2.5 10H4M5.5 4H11.5C12.3284 4 13 4.67157 13 5.5V11.5C13 12.3284 12.3284 13 11.5 13H5.5C4.67157 13 4 12.3284 4 11.5V5.5C4 4.67157 4.67157 4 5.5 4Z" stroke="#040508" strokeWidth="1.3" strokeLinejoin="round"/>
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
    </div>
  );
};

export default ColorUsage;