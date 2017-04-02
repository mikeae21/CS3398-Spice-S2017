var React = require("react");
var Swatch = require("./swatch.js");
import { shallow } from 'enzyme';
it('constructor throws error if invalid arg', () => {
    expect(() => {
                shallow(<Swatch color = '*$^*@^#' />) 
            }).toThrow("Invalid color for Swatch");
});


