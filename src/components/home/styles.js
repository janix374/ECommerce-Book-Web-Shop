import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(3),
	},
	DetailsImage: {
		width: '100%',
	},
	PictureBackground: {
		border: '1px solid black',
		maxWidth: '600px',
		height: '80vh',
		margin: '0px auto',
		position: 'relative',
		overflow: 'hidden',
	},
	PictureCriminalBackground: {
		position: 'absolute',
		top: '0px',
		bottom: '0px',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	PictureCriminal: {
		position: 'absolute',
		right: '0px',
		bottom: '0px',
		transition: '10s',

		'&:hover': {
			transform: 'scale(1.3, 1.3)',
		},
	},
	BlockquoteContainer: {
		maxWidth: '600px',
		margin: '0px auto',
		borderLeft: '8px solid rgba(173,163,147,.25)',
		color: '#ada393',
		textAlign: 'justify',
	},
}));
