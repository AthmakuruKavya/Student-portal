import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import CGPA from './pages/CGPA';
import Assignments from './pages/Assignments';

function App() {
  const [activeItem, setActiveItem] = useState('Dashboard');

  const renderPage = () => {
    switch (activeItem) {
      case 'Courses':
        return <Courses />;
      case 'CGPA':
        return <CGPA />;
      case 'Assignments':
        return <Assignments />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Topbar activeItem={activeItem} />
      <div className="main-content">
        <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
        <div className="page">
          {renderPage()}
        </div>
      </div>
    </div>
  );
}

export default App;
