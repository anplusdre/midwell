import React from "react";
import styles from '../../../styles/mw.module.css';
import ContentTable from "../../../components/ContentTable";
import Exemplar from "../exemplar/Exemplar";
import CodeBlockComponent from "../codeblock/CodeBlock";
import NavigationCodes from "./NavCode";
import './nav.css'

const NavigationComponent = () => {
    const sections = [
        { id: 'Base', label: 'Base', path: '/comp/navigation#Base' },
      ];
      return (
        <><div>
          <div className={styles.Navigation}>
            <div className={styles.ctWr}>
                <div className={styles.ctHd + ' ' + 'btm-48'}>
                    <div className={styles.ctTl}>Navigations</div>
                        <p style={{ fontSize: "var(--g-24)", fontWeight: "300" }}>
                            A complete component of navigations with various styles
                        </p>
                </div>

                <div className={styles.ctBd} id="Base">
                    <h5 className={styles.title}>Get Started</h5>
                    <p>Create a parent element for your navigation using <code>.nav</code>, and wrap all your buttons inside.</p>
                    
                    {/* <Exemplar buttonContent={<nav className="nav"></nav>} /> */}
                    <CodeBlockComponent text={NavigationCodes.Code1} language="jsx" Copy={true} CodeTitle={"jsx"} />
                    <p>or you can use <code>.container</code> inside your <code>.nav</code> to give it's children a fixed width of 1280px</p>
                    <CodeBlockComponent text={NavigationCodes.Code2} language="jsx" Copy={true} CodeTitle={"jsx"} />

                    <p>The height of the navigation bar will depends on it's children's height plus assigned default padding.</p>

                    <Exemplar buttonContent={<nav className="nav">
                      <div>Logo</div>
                      <div>Contact</div>
                    </nav>} />

                    <CodeBlockComponent text={NavigationCodes.Code3} language="jsx" Copy={true} CodeTitle={"jsx"} />
                    <div className="callout co-warning darkTheme">
                    At the example above it's total height would be 40px since its content is a text with 16px height from line-height, and the <code>.nav</code> default paddings are 12px.
                    </div>
                </div>

                <hr />

            </div>
          </div>
        </div><ContentTable sections={sections} /></>
      );
};

export default NavigationComponent;