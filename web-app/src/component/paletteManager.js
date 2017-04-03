var React = require('react');
var Swatch = require('./swatch')

class PaletteManager extends React.Component {
	constructor(props){
		super(props)
		this.nextID = 0;

		//The state should never be directly modified, so we update our values in 
		// this.palette and then update the state when needed
		this.palette = {}
		this.setState({ palette:this.palette })

		// generate random test colors
		while (this.nextID < Math.floor(Math.random()*3+4))
			this.addSwatch('#' + (Math.random()*0xFFFFFF<<0).toString(16))
	}

	addSwatch(color){
		this.nextID++

		this.palette[this.nextID] = color
		this.setState({ palette: this.palette })

		console.log(this.getPaletteInfo());
	}

	removeSwatch(key){
		delete this.palette[key];
		this.setState({ palette:this.palette })
	}

	// This function manages the drag and drop updating of a swatch.
	//  When a swatch is dropped this function should be fired with that
	//  swatch's id and the new location that it should be moved to.
	sortSwatches(id, newLoc){

	}

	getPaletteInfo(){
		return Object.values(this.palette).join(', ')
	}

	render(){
		return(
			<div id="palette">
				{
					Object.keys(this.palette).map(function(key){
						return <Swatch className="swatch" deleteFunc={this.removeSwatch.bind(this, key)} id={key} color={this.palette[key]} />
					}.bind(this))
				}
			</div>
		);
	}
}
module.exports = PaletteManager;