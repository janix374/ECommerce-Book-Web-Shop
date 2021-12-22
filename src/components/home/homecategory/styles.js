const styleBox1 = {
	width: '250px',
	height: '250px',
	backgroundColor: 'primary.dark',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	margin: '0px auto',
	position: 'relative',
	overflow: 'hidden',
	borderRadius: '10%',
};

const styleBox2 = {
	position: 'absolute',
	transition: '8s',
	'&:hover': {
		transform: 'scale(1.4, 1.4)',
	},
};

const styleBox3 = {};

const styleMainBox = {
	margin: '0 auto',
	width: '249px',
	overflow: 'hidden',
	a: {
		textDecoration: 'none',
		color: '#000000',
		'&:hover': { textDecoration: 'none', color: '#000000' },
		'&:visited': { color: '#000000' },
		'&:ctive': { color: '#000000' },
	},
};

export { styleBox1, styleBox2, styleBox3, styleMainBox };
