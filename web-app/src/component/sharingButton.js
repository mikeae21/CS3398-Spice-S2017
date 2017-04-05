var React = require('react');
var PaletteManager = require('./paletteManager')


class SharingButton extends React.component{
	constructor(props){
		super(props)
		console.log(this.props.paletteManager);
	}

	copyHexList(){

	}

	render(){
		return(
			<div>
			</div>
		);
	}

}

module.exports = SharingButton;