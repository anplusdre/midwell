import React from 'react';
import styles from '../styles/mw.module.css';
import TableOfContents from '../pages/comp/tableofcontent/TableofContents';

const ContentTable = ({ sections }) => {
  return (
    <div className={styles.TableofContent}>
      <div className={styles.TableofContentWrapper}>
        {sections && sections.length > 0 && <TableOfContents sections={sections} />}
      </div>
    </div>
  );
};

export default ContentTable;
