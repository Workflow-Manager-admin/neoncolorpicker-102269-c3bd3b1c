import React from 'react';
import './App.css';
import NeonColorPicker from './NeonColorPicker';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            {/* The button from template is optional. Remove if desired for a cleaner look. */}
            {/* <button className="btn">Template Button</button> */}
          </div>
        </div>
      </nav>

      <main>
        <NeonColorPicker />
      </main>
    </div>
  );
}

export default App;