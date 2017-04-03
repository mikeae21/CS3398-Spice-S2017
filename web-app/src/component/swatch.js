var React = require('react');

class Swatch extends React.Component {
    constructor(props){

        super(props)
        if(!/^#[0-9a-f]{3,6}$/i.test(this.props['color'])){
           throw('Invalid color for Swatch');
        } 

    }

    render(){
        const divStyle = {
            backgroundColor: this.props['color']    
        };

        return (
            <div className="swatch" style={divStyle}>
                &nbsp;
                <span className="swatchText"> {this.props['color']} </span>
                <button className="closeButton" />
            </div>
        );
    }
}

module.exports = Swatch;
