import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	root: {
		maxWidth: '100%',
		minHeight: '500px',
		overflow: 'hidden',
	},
	media: {
		// height: '200px',
		paddingTop: '100%',
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
