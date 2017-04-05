var React = require("react");
var Swatch = require("./swatch.js")
var PaletteManager = require("./paletteManager.js")
import { shallow } from 'enzyme';
it('addSwatch throws error if invalid key', () => {
	expect(() => {
		shallow(<PaletteManager />).instance().addSwatch('******')
	}).toThrow('Invalid color for addSwatch')
});

// it('addSwatch should successufully add a new swatch to the palette', () => {
// 	expect(() => {
// 		var mgr = shallow(<PaletteManager />).instance()
// 		var oldSize = mgr.getPaletteLength();
// 		mgr.addSwatch('#FFFFFF');

// 	})
// })

it('removeSwatch throws error if invalid key', () => {
	expect(() => {
		shallow(<PaletteManager />).instance().removeSwatch('******')
	}).toThrow('Key doesn\'t exist in palette')
});
