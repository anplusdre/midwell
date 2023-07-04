import React from 'react';
import { ButtonTables, ButtonSizeTableData, ButtonSizeTable } from './indexing';
import CodeBlockComponent from '../codeblock/CodeBlock';
import {Exemplar, ExemplarBlue} from '../exemplar/Exemplar';
import ContentTable from '../../../components/ContentTable';
import './button.css'
import styles from '../../../styles/mw.module.css'; // Import CSS module
import '../codeblock/codeblock.css';

const code1 = '<button>';
const code2 = '<div>';

const ButtonsComp = () => {
  
  const sections = [
    { id: 'Base', label: 'Base', path: '/components/buttons#Base' },
    { id: 'Sizes', label: 'Sizes', path: '/components/buttons#Sizes' },
    { id: 'Variants', label: 'Variants', path: '/components/buttons#Variants' },
  ];
  return (
    <><div>
      <div className={styles.CompButtons}>
        <div className={styles.ctWr}>
          <div className={styles.ctHd}>
            <div className={styles.ctTl}>Buttons</div>
            <p style={{ fontSize: "var(--g-20)", fontWeight: "300" }}>
              At present, there are five button styles available: Solid, Outline, Fade, Ghost, and Disable. Each of these styles further encompasses five different variants: Neutral, Primary, Positive, Caution, and Negative.
            </p>
            <img className="top-16" src='../assets/CompButtons.png'></img>
          </div>

          <div className={styles.ctBd} id="Base">
            <h5 className={styles.title}>Get Started</h5>
            <p>Midwell provides a base `.btn` class that establishes fundamental styles including padding and content alignment. By default, buttons with the <code>.btn</code> class have a transparent border and background color. They do not possess any specific focus or hover styles defined.
            </p>

            <Exemplar buttonContent={<button className="btn sm">Button</button>} />
            <CodeBlockComponent text={ButtonTables.ButtonStart} language="jsx" />
            <div className="callout co-warning">
              You can utilize the <code>.btn</code> class with either the <code>{code1}</code> tag or a <code>{code2}</code> tag. It is important to note that the class must begin with <code>.btn</code>. Additionally, please keep in mind that the button element does not have a predefined width. If you wish to create a row or column of buttons, you will need to manually assign a flex or grid parent and set the appropriate properties.
            </div>
          </div>

          <hr />

          <div className={styles.ctBd} id='Sizes'>
            <h5 className={styles.title}>Sizes</h5>
            <p>There are four button sizes available: <code>xs</code>, <code>sm</code>, <code>md</code>, and <code>lg</code>.
              Each size utilizes padding and is based on its text line-height. Here is a breakdown of the button sizes along with some examples:
            </p>
            <Exemplar buttonContent={<><button className="btn xs">Extra Small</button><button className="btn sm">Small</button><button className="btn md">Medium</button><button className="btn lg">Large</button></>} />
            <CodeBlockComponent text={ButtonTables.ButtonSizes} language="jsx" />
            <div className='tableWrapper'>
              <p className='top-32'>Buttons with a height exceeding 48 pixels are not commonly used in user interfaces due to their unnecessary size or the requirement of excessively large text to maintain visibility. As a result, such buttons are generally non-existent. Below, you can find button size breakdown table. </p>
              <p className="top-32 btm-16" style={{ fontSize: 'var(--g-20)', color: 'var(--disable-02)' }}>Button Size table</p>
              <ButtonSizeTable sizes={ButtonSizeTableData.sizes} />
            </div>
          </div>


          <hr />

          <div className={styles.ctBd} id='Variants'>
            <h5 className={styles.title}>Variants</h5>
            <p>
              These variants allow you to customize the visual presentation of the buttons based on the desired context or purpose. Using button variants appropriately is important for maintaining visual consistency and conveying meaning to users. By selecting the appropriate button variant, you can enhance the user experience and provide visual cues that help users understand the purpose and importance of different actions within your application or website.
            </p>
            <Exemplar buttonContent={ButtonTables.ButtonColorVariants} />
            <CodeBlockComponent text={ButtonTables.ButtonColors} language="jsx" />
          </div>

          <hr />

          <div className={styles.ctBd}>
            <h5 className={styles.title}>Styles</h5>
            <p>There are 4 sizes of the buttons <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>,
              all of these sizes use padding and rely upon it's text line-height. Below are the button sizes breakdown and examples :
            </p>
            <Exemplar buttonContent={<><button className="btn sm sl">Solid</button><button className="btn sm fd">Fade</button><button className="btn sm ol">Outline</button><button className="btn sm gh">Ghost</button></>} />
            <CodeBlockComponent text={ButtonTables.ButtonStyles} language="jsx" />
          </div>

          <hr />

          <div className={styles.ctBd}>
            <h5 className={styles.title}>Icons</h5>
            <CodeBlockComponent text={ButtonTables.ButtonIcons} language="jsx" />
          </div>

        </div>
      </div>
    </div><ContentTable sections={sections} /></>
  );
};

export default ButtonsComp;