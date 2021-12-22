import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	root: {
		maxWidth: '400px',
		minHeight: '550px',
		// overflow: 'hidden',
	},
	media: {
		height: '400px',
	},
	cardContent: {
		display: 'block',
		// justifyContent: 'space-between',
	},
	CardActions: {
		display: 'flex',
		justifyContent: 'flex-end',
	},
	cardContentDescription: {
		height: '100px',
		overflow: 'hidden',
	},
}));
