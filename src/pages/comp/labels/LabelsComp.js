import React from "react";
import styles from '../../../styles/mw.module.css';
import ContentTable from "../../../components/ContentTable";

const LabelsComp = () => {
    const sections = [
        { id: 'Base', label: 'Base', path: '/components/labels#Base' },
      ];
      return (
        <><div>
          <div className={styles.CompLabels}>
          </div>
        </div><ContentTable sections={sections} /></>
      );
};

export default LabelsComp;