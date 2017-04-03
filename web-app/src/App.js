import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Swatch from './component/swatch.js';
import PaletteManager from './component/paletteManager.js';

class App extends Component {
  render() {
    return (
      <PaletteManager />
    );
  }
}

export default App;
