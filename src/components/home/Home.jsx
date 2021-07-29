import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';
import pistureBackground from '../../assets/crimescene.jpg';

const Home = () => {
	const classes = useStyles();
	return (
		<section className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justifyContent='center' spacing={4}>
				<Typography variant='h2' gutterBottom>
					Crime Novel Store
				</Typography>
				<Grid item xs={12}>
					<div
						className={classes.PictureBackground}
						style={{ backgroundImage: `url(${pistureBackground})` }}
					/>
				</Grid>
			</Grid>
		</section>
	);
};

export default Home;
