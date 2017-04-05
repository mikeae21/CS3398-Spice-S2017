var React = require("react");
var Swatch = require("./swatch.js")
var PaletteManager = require("./paletteManager.js")
import { shallow } from 'enzyme';
it('addSwatch throws error if invalid key', () => {
	expect(() => {
		shallow(<PaletteManager />).instance().addSwatch('******')
	}).toThrow('Invalid color for addSwatch')
});

it('removeSwatch throws error if invalid key', () => {
	expect(() => {
		shallow(<PaletteManager />).instance().removeSwatch('******')
	}).toThrow('Key doesn\'t exist in palette')
});