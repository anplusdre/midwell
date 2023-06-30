import React, { useState } from 'react';
import buttonTabs from './buttonsTabs'

const tabs = buttonTabs;
  
const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);
  
    return (
      <div>
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={index === activeTab ? 'active' : ''}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
        <div>{tabs[activeTab].content}</div>
      </div>
    );
  };

  export default Tabs;