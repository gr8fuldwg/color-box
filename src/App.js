import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="Header">
          <h1 className="title">Color Box</h1>
        </header>
        <main>
          <div className="box"></div>
          <input type="color" value="#ff0000" className="color-selector" />
        </main>
        <footer className="Footer">
          <p>Made by me!</p>
        </footer>
      </div>
    );
  }
}

export default App;
