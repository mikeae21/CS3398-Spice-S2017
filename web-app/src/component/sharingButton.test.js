var React = require('react')
var SharingButton = require('./sharingButton.js')
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<SharingButton />, div);
});