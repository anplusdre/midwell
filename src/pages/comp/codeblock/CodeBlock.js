import React from 'react';
import { CodeBlock } from 'react-code-blocks';
import codeblockcol from '../../color/codeblockcol';
import jsSvg from '../../../assets/js.svg';

const CodeBlockComponent = ({ text, language }) => {
  return (
    <div className="codeBlock">
      <pre className="codeBlockWrapper">
            <div className="codeBlockHeader">
                <div className="cBTitle"><img src={jsSvg}></img>
                      jsx
                </div>
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
