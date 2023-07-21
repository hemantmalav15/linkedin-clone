import React from 'react';
import './App.css';
import Header from './header-component/Header';
import Sidebar from './sidebar-component/Sidebar';
import Feed from './feed-component/Feed';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header/>
      {/* App Body */}
      <div className="app-body">
         {/* left sidebar */}
        <Sidebar />
         {/* feed */}
        <Feed/>
         {/* right sidebar */}
      </div>
    </div>
  );
}

export default App;
