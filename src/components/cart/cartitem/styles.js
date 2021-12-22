import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
	media: {
		height: 260,
	},
	cardContent: {
		display: 'block',
		justifyContent: 'space-between',
	},
	cartActions: {
		justifyContent: 'space-between',
	},
	buttons: {
		display: 'flex',
		alignItems: 'center',
	},
	cardClass: {
		minHeight: '450px',
	},
}));
