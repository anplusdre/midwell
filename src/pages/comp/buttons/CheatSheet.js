import React, { useState } from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';
import CopyToClipboard from '../../../components/CopyClipboard'
import CopyIcon from '../icons/iconCopy'

const ButtonCheatSheet = ({ title, description, buttons }) => {
    
  return (
    <div>
      <div className='ctTl top-48'>
        <h6 className='top-16'>{title}</h6>
        <p className='top-8 btm-16'>
          {description}
        </p>
      </div>
      <table className='tables hollow darkTheme top-32' style={{tableLayout: 'auto'}}>
        <thead>
          <tr className='tableHead'>
            <th>Visual</th>
            <th>Size (px)</th>
            <th>Style</th>
            <th>Color</th>
            <th>Html</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody className='tableBody'>
          {buttons.map((button, index) => (
            <tr className='tableData' key={index}>
                <td><button className={button.visual}>Button</button></td>
                <td>{button.size}</td>
                <td>{button.style}</td>
                <td>{button.color}</td>
                <td> <pre className='hollow'><CodeBlock text={"<button " + button.html + ">"} language="html" showLineNumbers={false} theme={dracula} /></pre></td>
                <td><a onClick={() => CopyToClipboard(button.html)} ><CopyIcon /></a> </td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ButtonCheatSheet;
