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
		width: '600px',
		height: '552px',
	},
}));
