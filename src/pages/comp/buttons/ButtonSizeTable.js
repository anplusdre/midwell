import React from 'react';
import styles from '../../../styles/mw.module.css'; // Import CSS module
const ButtonSizeTable = ({sizes}) => {
  return (
    <div>
      <table className={styles.tables + ' ' + styles.hollow + ' ' + styles.darkTheme}>
        <thead>
          <tr className={styles.tableHead}>
            <th>Class</th>
            <th>Height (px)</th>
            <th>Vertical Padding (px)</th>
            <th>Horizontal Padding (px)</th>
            <th>Html</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {sizes.map((size, index) => (
            <tr className={styles.tableData} key={index}>
            <td>{size.class}</td>
            <td>{size.height}</td>
            <td>{size.vertical}</td>
            <td>{size.horizontal}</td>
            <td><code lang='html'>{size.html}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ButtonSizeTable;
