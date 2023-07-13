import React from "react";
import { ButtonTables } from '../buttons/indexing';
import CodeBlockComponent from '../codeblock/CodeBlock';
import Exemplar from '../exemplar/Exemplar';
import styles from '../../../styles/mw.module.css';
import '../buttons/button.css'
import ContentTable from "../../../components/ContentTable";
import SectionData from "../../../components/ComponentSection";

const ButtonsGroup = () => {
    const sections = [
        { id: 'Base', label: 'Get Started', path: '/components/labels#Base' },
        { id: 'Adjacent', label: 'Adjacent Buttons', path: '/components/labels#Adjacent' },
      ];
      return (
        <><div>
          <div className={styles.ButtonsGroup}>
            <div className={styles.ctWr}>
                <div className={styles.ctHd + ' ' + 'btm-48'}>
                    <div className={styles.ctTl}>Buttons Group</div>
                        <p style={{ fontSize: "var(--g-24)", fontWeight: "300" }}>
                            You can easily stack buttons together side by side with various styles.
                        </p>
                </div>

                <div className={styles.ctBd} id="Base">
                    <h5 className={styles.title}>Get Started</h5>
                    <p>Create a parent element for your buttons using <code>.btn-group</code>, and wrap all your buttons inside.</p>
                    
                    <Exemplar buttonContent={<div className="btn-group"><button className="btn sm primary">Button</button><button className="btn sm outline primary">Button</button><button className="btn sm fade primary">Button</button></div>} />
                    <CodeBlockComponent text={ButtonTables.ButtonsGroup1} language="jsx" Copy={true} CodeTitle={"jsx"} />
                </div>

                

                <hr />

                <div className={styles.ctBd} id="Adjacent">
                    <h5 className={styles.title}>Adjacent</h5>
                    <p>For a group of buttons that is adjacent without gaps, we need to looks like a capsule with different style at the first and the last item, for more please see example.</p>
                    
                    <Exemplar buttonContent={<div className="btn-group btn-adjacent"><button className="btn sm primary">Button</button><button className="btn sm primary">Button</button><button className="btn sm primary">Button</button><button className="btn sm primary">Button</button></div>} />
                    <CodeBlockComponent text={ButtonTables.ButtonsGroup2} language="jsx" Copy={true} CodeTitle={"jsx"} />
                </div>

                <hr />

                <div className={styles.ctBd} id="Active">
                    <h5 className={styles.title}>Active State</h5>
                    <p>For onClick( ) event like active state, refer to example below. You can also combine this with Our React Component <span className={styles.highlight}>React Adjacent Buttons</span></p> 
                    <Exemplar buttonContent={<div className="btn-group btn-adjacent" role="group"><button className="btn sm primary active" aria-current="page">Active</button><button className="btn sm primary">Button</button><button className="btn sm primary">Button</button><button className="btn sm primary">Button</button></div>} />
                    <CodeBlockComponent text={ButtonTables.ButtonsGroup2} language="jsx" Copy={true} CodeTitle={"jsx"} />
                </div>

                <hr />

                <div className={styles.ctBd} id="Adjacent Outline">
                    <h5 className={styles.title}>Adjacent Outline</h5>
                    <Exemplar buttonContent={<div className="btn-group btn-adjacent"><button className="btn sm outline primary">Button</button><button className="btn sm outline primary">Button</button><button className="btn sm outline primary">Button</button></div>} />
                    <CodeBlockComponent text={ButtonTables.ButtonsGroup2} language="jsx" Copy={true} CodeTitle={"jsx"} />

                    <p className="top-24">Below are the active state example.</p>
                    <Exemplar buttonContent={<div className="btn-group btn-adjacent"><button className="btn sm outline caution active">Button</button><button className="btn sm outline caution">Button</button><button className="btn sm outline caution">Button</button></div>} />
                </div>

                <hr />
                
                <div className={styles.ctBd} id="Vertical">
                    <h5 className={styles.title}>Vertical</h5>
                    <p>For a group of buttons that is adjacent without gaps, we need to looks like a capsule with different style at the first and the last item, for more please see example.</p>
                    
                    <Exemplar buttonContent={<div className="btn-group btn-adjacent vertical"><button className="btn sm primary">Button</button><button className="btn sm primary">Button</button><button className="btn sm primary">Button</button><button className="btn sm primary">Button</button></div>} />
                    <CodeBlockComponent text={ButtonTables.ButtonsGroup2} language="jsx" Copy={true} CodeTitle={"jsx"} />
                </div>

            </div>
          </div>
        </div><ContentTable sections={sections} /></>
      );
};

export default ButtonsGroup;