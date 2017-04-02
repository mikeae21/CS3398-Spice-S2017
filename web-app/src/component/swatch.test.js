var React = require("react");
var Swatch = require("Swatch");

it('constructor throws error if invalid arg', () => {
    expect(function(){
                var badSwatch = <Swatch color = 'not a color' />;
            }.toThrow("Not a valid color"));
});

it('swatches should have unique ids even if same color', () => {
    var swatch1 = <Swatch color = '#4286f4' />;
    var swatch2 = <Swatch color = '#4286f4' />;
    expect(swatch1.getID()).not.toEqual(swatch2.getID());
});
