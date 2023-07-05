import React, { useState } from 'react';
import { CodeBlock } from 'react-code-blocks';
import codeblockcol from '../../color/codeblockcol';
import jsSvg from '../../../assets/js.svg';
import CopyToClipboard from '../../../components/CopyClipboard'

const CodeBlockComponent = ({ text, language, CodeTitle, Copy }) => {

  const [showToolTip, setShowToolTip] = useState(false);

  const handleCopyClick  = () => {
    CopyToClipboard(text);
    setShowToolTip(true);

    // Hide the tooltip after 2 seconds
    setTimeout(() => {
      setShowToolTip(false);
    }, 2000);
  };

  return (
    <div className="codeBlock">
      <pre className="codeBlockWrapper">
            <div className="codeBlockHeader">
                <div className="cBTitle"><img src={jsSvg} alt='jslogo'></img>
                      {CodeTitle}
                </div>
                {Copy && (<div className="codeAction">
                  <div className="iconBox" onClick={() => handleCopyClick (text)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path className='iconStyle' d="M11.5 4.5V2.75C11.5 2.28587 11.3156 1.84075 10.9874 1.51256C10.6592 1.18437 10.2141 1 9.75 1H2.75C2.28587 1 1.84075 1.18437 1.51256 1.51256C1.18437 1.84075 1 2.28587 1 2.75V9.75C1 10.2141 1.18437 10.6592 1.51256 10.9874C1.84075 11.3156 2.28587 11.5 2.75 11.5H4.5M6.25 4.5H13.25C14.2165 4.5 15 5.2835 15 6.25V13.25C15 14.2165 14.2165 15 13.25 15H6.25C5.2835 15 4.5 14.2165 4.5 13.25V6.25C4.5 5.2835 5.2835 4.5 6.25 4.5Z" stroke="#81848A" strokeWidth="1.3" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {showToolTip && <div className="CopyToolTip">Copied</div>}
                </div>
                )}
            </div>
        <CodeBlock
          text={text}
          language={language}
          showLineNumbers={false}
          theme={codeblockcol}
        />
      </pre>
    </div>
  );
};

export default CodeBlockComponent;
