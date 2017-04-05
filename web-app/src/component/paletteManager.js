var React = require('react');
var Swatch = require('./swatch')

class PaletteManager extends React.Component {
	constructor(props){
		super(props)
		this.nextID = 0;

		//The state should never be directly modified, so we update our values in 
		// this.palette and then update the state when needed
		this.palette = {}
		this.state={ palette:this.palette }

		// generate random test colors
		if (this.props.debug)
			while (this.nextID < Math.floor(Math.random()*3+4))
				this.addSwatch('#' + (Math.random()*0xFFFFFF<<0).toString(16))
	}

	getInitialState(){
		return { palette:this.palette }
	}

	addSwatch(color){
		if(!/^#[0-9a-f]{3,6}$/i.test(color))
      throw(new Error('Invalid color for addSwatch'));

		this.palette[this.nextID++] = color
		this.props.app.palette = this.palette
	}

	removeSwatch(key){
		if(this.palette[key] === undefined)
      throw(new Error('Key doesn\'t exist in palette'));

		delete this.palette[key];
		this.props.app.palette = this.palette
		this.setState({ palette:this.palette })
	}

	componentWillMount(){
		this.setState({ palette:this.palette })
	}

	// This function manages the drag and drop updating of a swatch.
	//  When a swatch is dropped this function should be fired with that
	//  swatch's id and the new location that it should be moved to.
	sortSwatches(id, newLoc){

	}

	getPaletteLength(){
		return (this.state.palette).length()
	}

	getPaletteAsString(){
		return Object.values(this.palette).join(', ')
	}

	getPaletteInfo(){
		return this.palette
	}

	render(){
		//Keep it populated for testing
		if (this.props.debug)
			if (Object.keys(this.palette).length < 2)
				while (Object.keys(this.palette).length < 6)
					this.addSwatch('#' + (Math.random()*0xFFFFFF<<0).toString(16))
		
		return(
			<div id="palette">
				{
					Object.keys(this.palette).map(function(key){
						return <Swatch className="swatch" deleteFunc={this.removeSwatch.bind(this, key)} id={key} key={key} color={this.palette[key]} />
					}.bind(this))
				}
			</div>
		);
	}
}
module.exports = PaletteManager;