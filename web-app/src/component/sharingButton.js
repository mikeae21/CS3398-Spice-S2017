var React = require('react');

class SharingButton extends React.Component{
	constructor(props){
		super(props);
	}

	copy(){
		console.log(Object.values(this.props.app.palette).join(', '));

	}

	render(){
		console.log(this);
		return(
			<button onClick={this.copy.bind(this)} >Copy</button>
		);
	}
}

module.exports = SharingButton;