import { styled } from '@mui/system';

const listStyle = {
	width: '100%',
	padding: 0,
	display: { xs: 'none', sm: 'block' },
	a: {
		textDecoration: 'none',
		color: '#000000',
		'&:hover': { textDecoration: 'none', color: '#000000' },
		'&:visited': { color: '#000000' },
		'&:ctive': { color: '#000000' },
	},
};

const selectionSteyle = {
	display: { xs: 'block', sm: 'none' },
};

const TextCategory = styled('p')({
	fontSize: '0.8rem',
	padding: 0,
});

export { listStyle, TextCategory, selectionSteyle };
