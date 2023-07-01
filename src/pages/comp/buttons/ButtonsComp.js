import React from 'react';
import ButtonTables from './ButtonTables';
// import ButtonsTable from './ButtonsTable.json'
import jsSvg from '../../../assets/js.svg';
import ButtonSizeTableData from './ButtonSizeTableData.json'
import ButtonSizeTable from './ButtonSizeTable'
import { CodeBlock, CopyBlock, dracula, xt256 } from 'react-code-blocks';

const code1 = '<button>';
const code2 = '<div>';

const ButtonsComp = () => {
  return (
    <div>
      <div className='CompButtons'>
        <div className='ctWr'>
          <div className='ctHd'>
            <div className='ctTl'>Buttons</div>
              <p style={{fontSize : "var(--g-20)", fontWeight : "300"}}>
              At present, there are five button styles available: Solid, Outline, Fade, Ghost, and Disable. Each of these styles further encompasses five different variants: Neutral, Primary, Positive, Caution, and Negative.
              </p>
              <img className='top-16' src='../assets/CompButtons.png'></img>
          </div>
          <div className='ctBd'>
            <h5 className="title">Get Started</h5>
            <p className='btm-16'>Midwell provides a base `.btn` class that establishes fundamental styles including padding and content alignment. By default, buttons with the <code>.btn</code> class have a transparent border and background color. They do not possess any specific focus or hover styles defined.
            </p>
            <div className='codeBlock'><pre><CopyBlock text={ButtonTables.ButtonStart} language="jsx" showLineNumbers={false} theme={xt256} coedeblock/></pre></div>
            <div className='examples rw rw-16 fx-start top-16 btm-16'>
                    <button className="btn sm">Button</button>
            </div>
            <div className='callout co-warning'>
            You can utilize the <code>.btn</code> class with either the <code>{code1}</code> tag or a <code>{code2}</code> tag. It is important to note that the class must begin with <code>.btn</code>. Additionally, please keep in mind that the button element does not have a predefined width. If you wish to create a row or column of buttons, you will need to manually assign a flex or grid parent and set the appropriate properties.
            </div>
            <hr></hr>
            <div className='ctCt'>
            <h5 className="title">Sizes</h5>
            <p>There are four button sizes available: <code>xs</code>, <code>sm</code>, <code>md</code>, and <code>lg</code>.
            Each size utilizes padding and is based on its text line-height. Here is a breakdown of the button sizes along with some examples:
            </p>
                        
            <div className='examples rw rw-16 fx-start top-16 btm-16'>
                    <button className="btn xs">Extra Small</button>
                    <button className="btn sm">Small</button>
                    <button className="btn md">Medium</button>
                    <button className="btn lg">Large</button>
            </div>
            <div className='buttonSizes'>
              <div className='codeBlock'>
                <pre className='codeBlockWrapper'>
                  <div className='codeBlockHeader'>
                    <div className='cBTitle'><img src={jsSvg}></img>
                      jsx
                    </div>
                  </div>
                  
                  <CodeBlock text={ButtonTables.ButtonSizes} language="jsx" showLineNumbers={false} theme={dracula} />
                </pre>
              </div>
            </div>
            
            <p className='top-32'>Buttons with a height exceeding 48 pixels are not commonly used in user interfaces due to their unnecessary size or the requirement of excessively large text to maintain visibility. As a result, such buttons are generally non-existent. Below, you can find button size breakdown table. </p>
            <h6 className="title top-32">Button Size table</h6>
            <ButtonSizeTable sizes={ButtonSizeTableData.sizes} />
          </div>
          </div>

          <hr />

          <div className='ctBd'>
            <div className='ctCt'>
            <h5 className="title">Styles</h5>
            <p>There are 4 sizes of the buttons <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>,
                  all of these sizes use padding and rely upon it's text line-height. Below are the button sizes breakdown and examples :
            </p>
            
            <div className='examples rw rw-16 fx-start top-16 btm-16'>
                    <button className="btn sm sl">Solid</button>
                    <button className="btn sm fd">Fade</button>
                    <button className="btn sm ol">Outline</button>
                    <button className="btn sm gh">Ghost</button>
            </div>
            <div className='buttonSizes'>
              <div className='codeBlock'>
                <pre className='codeBlockWrapper'>
                  <div className='codeBlockHeader'>
                    <div className='cBTitle'><img src={jsSvg}></img>
                      jsx
                    </div>
                  </div>
                  <CodeBlock text={ButtonTables.ButtonStyles} language="jsx" showLineNumbers={false} theme={dracula} />
                </pre>
              </div>
            </div>
            </div>
          </div>

          <hr />

          <div className='ctBd'>
            <h5 className="title">Variants</h5>
            <div className='buttonSizes'>
              <div className='codeBlock'>
                <pre className='codeBlockWrapper'>
                  <div className='codeBlockHeader'>
                    <div className='cBTitle'><img src={jsSvg}></img>
                      jsx
                    </div>
                  </div>
                  <div className='examples rw rw-16 fx-start'>
                    <button className="btn sm sl nt">Neutral</button>
                    <button className="btn sm sl primary">Primary</button>
                    <button className="btn sm sl pt">Positive</button>
                    <button className="btn sm sl wn">Warning</button>
                    <button className="btn sm sl ng">Negative</button>
                    <button className="btn sm disable">Disable</button>
                  </div>
                  <CodeBlock text={ButtonTables.ButtonColors} language="jsx" showLineNumbers={false} theme={dracula} />
                </pre>
              </div>
            </div>
          </div>

          <div className='ctBd'>
            <h5 className="title">Icons</h5>
            <div className='buttonSizes'>
              <div className='codeBlock'>
                <pre className='codeBlockWrapper'>
                  <div className='codeBlockHeader'>
                    <div className='cBTitle'><img src={jsSvg}></img>
                      jsx
                    </div>
                  </div>
                  <div className='examples rw rw-16 fx-start'>
                    <button className="btn sm sl nt i-lf">
                      <img src='../assets/copy.svg' />Left Icon
                    </button>
                    <button className="btn sm sl primary i-rg">
                      <img src='../assets/copy.svg' />Right Icon
                    </button>
                  </div>
                  <CodeBlock text={ButtonTables.ButtonIcons} language="jsx" showLineNumbers={false} theme={dracula} />
                </pre>
              </div>
            </div>
          </div>

          <div className='examples'>
            <div className='buttonCollection rw rw-8 fx-start'>
              <button className='btn md sl ng'>Reject</button>
              <button className='btn md sl pt'>Approve</button>
            </div>
          </div>

          <div className='examples'>
            <div className='buttonCollection rw rw-8 fx-start'>
              <button className='btn md sl nt'>Reject</button>
              <button className='btn md sl primary'>Approve</button>
            </div>
          </div>

          {/* <div className='ctBd'>
            <div className="ButtonsExample">
              <ButtonCheatSheet
                title={ButtonsTable.basePalette.title}
                description={ButtonsTable.basePalette.description}
                buttons={ButtonsTable.basePalette.buttons}
              />
            </div>
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default ButtonsComp;