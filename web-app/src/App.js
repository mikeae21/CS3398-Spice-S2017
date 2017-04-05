import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Swatch from './component/swatch.js';
import PaletteManager from './component/paletteManager.js';
import SharingButton from './component/sharingButton.js';

class App extends Component {
	constructor(props){
		super(props);
		this.paletteManager = <PaletteManager debug={true} app={this} />;
		this.shareButton = <SharingButton app={this} />;
		this.palette = {}
	}

  render() {
    return (
    	<div>
    		{this.shareButton}
    		{this.paletteManager}
    	</div>
    );    
  }
}

export default App;
