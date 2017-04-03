var React = require('react');
var Swatch = require('./swatch')

class PaletteManager extends React.Component {
	constructor(props){
		super(props)
	}

	addSwatch(color){

	}

	removeSwatch(id){

	}

	// This function manages the drag and drop updating of a swatch.
	//  When a swatch is dropped this function should be fired with that
	//  swatch's id and the new location that it should be moved to.
	sortSwatches(id, newLoc){

	}

	getPaletteInfo(){

	}

	render(){

		return(
			<ul id="palette">
				<Swatch color="#00adef" />
				<Swatch color="#00efad" />
				<Swatch color="#ab8ef1" />
				<Swatch color="#f0000d" />
			</ul>
		);
	}
}
module.exports = PaletteManager;