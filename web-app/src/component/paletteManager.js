var React = require('react');
var Swatch = require('./swatch')

class PaletteManager extends React.Component {
	constructor(props){
		super(props)
		this.nextID = 0;
		this.palette = {}
		while (this.nextID < 5)
		{
			// generate random test colors
			this.addSwatch('#' + (Math.random()*0xFFFFFF<<0).toString(16))
		}
	}

	addSwatch(color){
		this.palette[this.nextID++] = color
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
	// 	var paletteLength = Object.keys(this.palette).length
	// 	var width = "calc(" + (100/paletteLength) + "% - 5px)"
		return(
			<div id="palette">
				{
					Object.keys(this.palette).map(function(key){
						return <Swatch className="swatch" id={key} color={this.palette[key]} />

					}.bind(this))
				}
			</div>
		);
	}
}
module.exports = PaletteManager;