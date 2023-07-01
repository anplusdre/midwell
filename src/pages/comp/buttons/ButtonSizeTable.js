import React from 'react';
const ButtonSizeTable = ({sizes}) => {
  return (
    <div>
      <table className='tables hollow darkTheme btm-32 top-24'>
        <thead>
          <tr className='tableHead'>
            <th>Class</th>
            <th>Height (px)</th>
            <th>Vertical Padding (px)</th>
            <th>Horizontal Padding (px)</th>
            <th>Html</th>
          </tr>
        </thead>
        <tbody className='tableBody'>
          {sizes.map((size, index) => (
            <tr className='tableData' key={index}>
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
