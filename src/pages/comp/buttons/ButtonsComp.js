import React from 'react';
import ButtonTables from './ButtonTables';
// import ButtonsTable from './ButtonsTable.json'
import ButtonSizeTableData from './ButtonSizeTableData.json'
import ButtonSizeTable from './ButtonSizeTable'
import { CodeBlock, dracula } from 'react-code-blocks';

const ButtonsComp = () => {
  return (
    <div>
      <div className='CompButtons'>
        <div className='ctWr'>
          <div className='ctHd'>
            <div className='ctTl'>Buttons</div>
              <p>
              Currently there are 5 styles of button, there are Solid, Bordered, Fade, Ghost, and Disable. And on each of these 5 types also consist 5 type of status which includes Neutral, Primary, Positive, Caution, and Negative.
              </p>
              <img className='top-16' src='../assets/CompButtons.png'></img>
          </div>
          <div className='ctBd'>
            <div className='ctCt'>
            <h6>Sizes</h6>
            <p>There are 4 sizes of the buttons <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>,
                  all of these sizes use padding and rely upon it's text line-height. Below are the button sizes breakdown and examples :
            </p>
            <ButtonSizeTable sizes={ButtonSizeTableData.sizes} /> 
            <div className='buttonSizes'>
              <div className='codeBlock'>
                <pre className='codeBlockWrapper'>
                  <div className='codeBlockHeader'>
                    jsx
                  </div>
                  <div className='examples rw rw-16 fx-start'>
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

          <div className='ctBd'>
            <div className='ctCt'>
            <h6>Styles</h6>
            <div className='buttonSizes'>
              <div className='codeBlock'>
                <pre className='codeBlockWrapper'>
                  <div className='codeBlockHeader'>
                    jsx
                  </div>
                  <div className='examples rw rw-16 fx-start'>
                    <button className="btn sm sl">Solid</button>
                    <button className="btn sm br">Outline</button>
                    <button className="btn sm fd">Fade</button>
                    <button className="btn sm gh">Ghost</button>
                  </div>
                  <CodeBlock text={ButtonTables.ButtonStyles} language="jsx" showLineNumbers={false} theme={dracula} />
                </pre>
              </div>
            </div>
            </div>
          </div>

          <div className='ctBd'>
            <h6>Colors</h6>
            <div className='buttonSizes'>
              <div className='codeBlock'>
                <pre className='codeBlockWrapper'>
                  <div className='codeBlockHeader'>
                    jsx
                  </div>
                  <div className='examples rw rw-16 fx-start' style={{background : 'var(--white)'}}>
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
            <h6>Icons</h6>
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