import React from "react";
import styles from '../styles/mw.module.css';

const SectionData = ({ title, children }) => {
    return(
        <div className={styles.ctBd}>
            <h5 className={styles.title}>{title}</h5>
                {children}
        </div>
    );
};

export default SectionData;