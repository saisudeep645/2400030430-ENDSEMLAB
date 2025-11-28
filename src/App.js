import React from 'react';
import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>Student Projects Gallery</h1>
        <p>Showcasing innovative student work and achievements</p>
      </header>
      <Gallery />
    </div>
  );
}

export default App;
