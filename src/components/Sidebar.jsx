import React from 'react';

function Sidebar({ activeItem, setActiveItem }) {
  const menuItems = ['Dashboard', 'Courses', 'CGPA', 'Assignments'];

  return (
    <div className="sidebar">
      <center><h2><span className="logo"></span> Menu</h2></center>
      <ul>
        {menuItems.map(item => (
          <li
            key={item}
            className={activeItem === item ? 'active' : ''}
            onClick={() => setActiveItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
