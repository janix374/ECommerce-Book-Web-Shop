const footerContainer = {
	minHeight: '200px',
	width: '100%',
	marginTop: '20px',
	backgroundColor: '#4c394e',
	color: '#ffffff',
	padding: '20px',
};

const iconStyleContainer = {
	span: {
		padding: '5px',
		marginRight: '10px',
		marginBottomt: '10px',
	},
	a: {
		textDecoration: 'none',
		marginRight: '10px',
		padding: '5px',
		'&:visited': {
			color: '#ffffff',
		},
		'&:hover': {
			color: '#ffffff',
		},
		'&:link': {
			textDecoration: 'none',
			color: '#ffffff',
		},
	},
};

const iconStyle = {
	fontSize: '2rem',
	marginTop: '10px',
	'&:hover': {
		borderBottom: '3px solid #000000',
	},
};

const gridContainer = {
	width: '80%',
	margin: '0px auto',
};

const linkStyle = {
	a: {
		textDecoration: 'none',
		color: '#ffffff',
		'&:hover': { textDecoration: 'underline', color: '#ffffff' },
		'&:visited': { color: '#ffffff' },
		'&:ctive': { color: '#ffffff' },
	},
};

export {
	footerContainer,
	iconStyleContainer,
	iconStyle,
	gridContainer,
	linkStyle,
};
