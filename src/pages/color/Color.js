import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import Palette from './Palette'
import styles from '../../styles/mw.module.css'; // Import CSS module
import midwell from '../../styles/midwell.module.css'; // Import CSS module
import CodeBlockComponent from '../comp/codeblock/CodeBlock';

const Color = () => {
  return (
    <div>
      <div className='colorUsage'>
      <div className={styles.ctWr}>
      <div className={styles.ctHd}>
        <div className={styles.ctTl + ' ' + midwell['btm-24']}>How to use</div>
        <p>Download and put midwell file to your css folder, after that you can include <span style={{color : 'var(--caution-05)'}}>color.css</span> on your main css file by using <code>@import './color.css';</code>. then you can call it's variables
            using <code>var(--x)</code> in your class styles. See example below.
        </p>
      </div>

        <CodeBlockComponent CodeTitle={"color.css"} text={`@import './color.css';

.header {
  background: var(--primary-05);
}

`} language="css" Copy={true} />
      
      <div className={styles.ctbd}>
              <CodeBlockComponent text={Palette} language="css" Copy={false}/>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Color;