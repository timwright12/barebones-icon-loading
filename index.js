export function renderIcon( obj ) {

	const el = obj.el ? obj.el : null;
	const filePath = obj.filepath ? obj.path : null;
	const fileName = obj.filename ? obj.name : null;
	const fileType = obj.fileType ? obj.fileType : 'svg';
	const label = obj.label ? obj.label : obj.filename;
	const hide = obj.hide ? obj.hide : 'false';
	const namespace = obj.namespace ? obj.namespace : '';

	console.log( el );
	console.log( filePath );
	console.log( fileName );
	console.log( fileType );
	console.log( label );
	console.log( hide );
	console.log( namespace );

	if ( 'undefined' === el || null === obj.filePath || null === obj.fileName ) {
		console.log( 'Element not set or the filename and/or path was missing' );
		return;
	}

}
