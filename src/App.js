// text-adventure-game\src\App.js

import React from 'react';
import AdventureGame from './AdventureGame';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Text-based Adventure Game</h1>
      </header>
      <main>
        <AdventureGame />
      </main>
      
    </div>
  );
}

export default App;
