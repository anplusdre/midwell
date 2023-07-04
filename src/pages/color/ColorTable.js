import React from 'react';
import styles from '../../styles/mw.module.css'
import midwell from '../../styles/midwell.module.css'
const ColorTable = ({ title, banner, description, colors }) => {
  return (
    <div>
      <div className={styles.ctTl}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles['btm-16']}>
          {description}
        </p>
        {/* <img src={banner} alt='Banner'></img> */}
      </div>
      <table className={styles.tables + ' ' + styles.hollow + ' ' + styles.darkTheme + ' ' + midwell['top-16'] + ' ' + midwell['btm-16']}>
        <thead>
          <tr className={styles.tableHead}>
            <th>Name</th>
            <th>Hex</th>
            <th>Usage</th>
            <th>Variable</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {colors.map((color, index) => (
            <tr className={styles.tableData} key={index}>
            <td>{color.name}</td>
              <td>
                <div className={styles.colorBox}>
                  <div className={styles.box} style={{ background: color.colorCode }}></div>
                  {color.hex}
                </div>
              </td>
              <td style={{ width: '160px' }}>
                <div className={styles.labels + ' ' + styles.darkTheme}>
                  {color.labels.map((label, index) => (
                    <div className='label' key={index}>{label}</div>
                  ))}
                </div>
              </td>
              <td><code>{color.rootClass}</code></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ColorTable;
