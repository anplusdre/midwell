import React from 'react';
import styles from '../../../styles/mw.module.css'; // Import CSS module
import midwell from '../../../styles/midwell.module.css'; // Import CSS module
const ButtonSizeTable = ({sizes}) => {
  return (
    <div>
      <table className={midwell.tables + ' ' + styles.hollow + ' ' + midwell.darkTheme}>
        <thead>
          <tr className={midwell.tableHead}>
            <th>Class</th>
            <th>Height (px)</th>
            <th>Vertical Padding (px)</th>
            <th>Horizontal Padding (px)</th>
            <th>Html</th>
          </tr>
        </thead>
        <tbody className={midwell.tableBody}>
          {sizes.map((size, index) => (
            <tr className={midwell.tableData} key={index}>
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
