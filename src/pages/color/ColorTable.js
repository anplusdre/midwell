import React from 'react';
const ColorTable = ({ title, banner, description, colors }) => {
  return (
    <div>
      <div className='ctTl'>
        <h6>{title}</h6>
        <p className='top-8 btm-16'>
          {description}
        </p>
        {/* <img src={banner} alt='Banner'></img> */}
      </div>
      <table className='tables hollow darkTheme top-16'>
        <thead>
          <tr className='tableHead'>
            <th>Name</th>
            <th>Hex</th>
            <th>Usage</th>
            <th>Variable</th>
          </tr>
        </thead>
        <tbody className='tableBody'>
          {colors.map((color, index) => (
            <tr className='tableData' key={index}>
            <td>{color.name}</td>
              <td>
                <div className='colorBox'>
                  <div className='box' style={{ background: color.colorCode }}></div>
                  {color.hex}
                </div>
              </td>
              <td style={{ width: '160px' }}>
                <div className='labels darkTheme'>
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
