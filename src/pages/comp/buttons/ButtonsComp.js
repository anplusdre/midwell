import React from 'react';
import ButtonTables from './ButtonTables';
// import ButtonsTable from './ButtonsTable.json'
import ButtonSizeTableData from './ButtonSizeTableData.json'
import ButtonSizeTable from './ButtonSizeTable'
import { CodeBlock, CopyBlock, dracula, xt256 } from 'react-code-blocks';

const ButtonsComp = () => {
  return (
    <div>
      <div className='CompButtons'>
        <div className='ctWr'>
          <div className='ctHd'>
            <div className='ctTl'>Buttons</div>
              <p style={{fontSize : "var(--g-20)", fontWeight : "300"}}>
              Currently there are 5 styles of button, there are Solid, Outline, Fade, Ghost, and Disable. And on each of these 5 types also consist 5 type of status which includes Neutral, Primary, Positive, Caution, and Negative.
              </p>
              <img className='top-16' src='../assets/CompButtons.png'></img>
          </div>
          <div className='ctBd'>
            <h5 className="title">Get Started</h5>
            <p className='btm-16'>To get started, just write your button class as <code>.btn</code>
            </p>
            <div className='codeBlock btm-48'><pre><CopyBlock text={ButtonTables.ButtonStart} language="jsx" showLineNumbers={false} theme={xt256} coedeblock/></pre></div>
            <div className='ctCt'>
            <h5 className="title">Sizes</h5>
            <p>There are 4 sizes of the buttons <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>,
                  all of these sizes use padding and rely upon it's text line-height. Below are the button sizes breakdown and examples :
            </p>
            <ButtonSizeTable sizes={ButtonSizeTableData.sizes} /> 
            <p>Beyond 48 pixel as button's height are non-existent, mostly because it is unnecessary or it had to use large text to cover it's visibility which is not-applicable in any User Interface. You can see our button's examples below. </p>
            
            
            <div className='buttonSizes'>
              <div className='codeBlock'>
                <pre className='codeBlockWrapper'>
                  <div className='codeBlockHeader'>
                    jsx
                  </div>
                  <div className='examples rw rw-16 fx-start pd-md'>
                    <button className="btn xs">x Small</button>
                    <button className="btn sm">Small</button>
                    <button className="btn md">Medium</button>
            <button className="btn lg">Large</button>
            </div>
                  <CodeBlock text={ButtonTables.ButtonSizes} language="jsx" showLineNumbers={false} theme={dracula} />
                </pre>
              </div>
            </div>
          </div>
          </div>

          <hr />

          <div className='ctBd'>
            <div className='ctCt'>
            <h5 className="title">Styles</h5>
            <p>There are 4 sizes of the buttons <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>,
                  all of these sizes use padding and rely upon it's text line-height. Below are the button sizes breakdown and examples :
            </p>
            
            <div className='buttonSizes'>
              <div className='codeBlock'>
                <pre className='codeBlockWrapper'>
                  <div className='codeBlockHeader'>
                    jsx
                  </div>
                  <div className='examples rw rw-16 fx-start'>
                    <button className="btn sm sl">Solid</button>
                    <button className="btn sm fd">Fade</button>
                    <button className="btn sm ol">Outline</button>
                    <button className="btn sm gh">Ghost</button>
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
                    jsx
                  </div>
                  <div className='examples rw rw-16 fx-start'>
                    <button className="btn sm sl nt">Neutral</button>
                    <button className="btn sm sl pm">Primary</button>
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
                    jsx
                  </div>
                  <div className='examples rw rw-16 fx-start'>
                    <button className="btn sm sl nt i-lf">
                      <img src='../assets/copy.svg' />Left Icon
                    </button>
                    <button className="btn sm sl pm i-rg">
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
              <button className='btn md sl pm'>Approve</button>
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