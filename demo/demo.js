import { renderIcon } from '../index.js';

const icon = document.querySelector( 'barebones-icon' );

renderIcon( {
	'el': icon,
	'filePath': icon.getAttribute( 'filePath' ),
	'fileName': icon.getAttribute( 'fileName' ),
	'fileType': icon.getAttribute( 'fileType' ),
	'label': icon.getAttribute( 'label' ),
	'hide': icon.getAttribute( 'hide' ),
	'namespace': icon.getAttribute( 'namespace' )
} );
