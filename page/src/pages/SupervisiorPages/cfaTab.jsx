import React, { useState } from 'react';
import CfaChart from './cfa-chart';

// Tab component
const Tab = ({ label, onClick, isActive }) => {
  return (
    <button
      onClick={onClick}
      style={{
        
        padding: '10px 20px',
        cursor: 'pointer',
        borderBottom: isActive ? '2px solid #000' : '2px solid transparent',
        background: 'none',
        border: 'none',
        outline: 'none'
      }}
    >
      {label}
    </button>
  );
};

// TabsContainer component
const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div >
      <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
        <Tab  label ="Tab 1 " onClick={() => handleTabClick(0)} isActive={activeTab === 0} />
        <Tab label="Tab 2" onClick={() => handleTabClick(1)} isActive={activeTab === 1} />
        <Tab label="Tab 3" onClick={() => handleTabClick(2)} isActive={activeTab === 2} />
      </div>
      <div  style={{ padding: '20px' }}>
        {activeTab  === 0 && <Component1 />}
        {activeTab === 1 && <Component2 />}
        {activeTab === 2 && <Component3 />}
      </div>
    </div>
  );
};

// Example Components for each tab
const Component1 = () => <div >< CfaChart/></div>;
const Component2 = () => <div>Content for Tab 2</div>;
const Component3 = () => <div>Content for Tab 3</div>;

export default TabsContainer;
