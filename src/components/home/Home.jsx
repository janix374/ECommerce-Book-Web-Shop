import React from 'react';
import { Typography, Grid, Box } from '@material-ui/core';
import useStyles from './styles';
import pistureBackground from '../../assets/crimescene.jpg';
import picsCriminal from '../../assets/criminal.png';

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
					>
						<img
							src={picsCriminal}
							alt='criminal'
							className={classes.PictureCriminal}
						/>
					</div>
				</Grid>
				<Grid item xs={12}>
					<Box component='blockquote' className={classes.BlockquoteContainer}>
						<Box
							component='p'
							marginBottom='0'
							padding='10px'
							fontWeight='300'
							lineHeight='1.7'
							fontSize='1rem'
						>
							When I finally caught up with Abraham Trahearne, he was drinking
							beer with an alcoholic bulldog named Fireball Roberts in a
							ramshackle joint just outside of Sonoma, California, drinking the
							heart right out of a fine spring afternoon.
						</Box>
					</Box>
				</Grid>
				<Grid item xs={12}>
					<Box component='blockquote' className={classes.BlockquoteContainer}>
						<Box
							component='p'
							marginBottom='0'
							padding='10px'
							fontWeight='300'
							lineHeight='1.7'
							fontSize='1rem'
						>
							It was about eleven o’clock in the morning, mid October, with the
							sun not shining and a look of hard wet rain in the clearness of
							the foothills. I was wearing my powder-blue suit, with dark blue
							shirt, tie and display handkerchief, black brogues, black wool
							socks with dark blue clocks on them. I was neat, clean, shaved and
							sober, and I didn’t care who knew it. I was everything the
							well-dressed private detective ought to be. I was calling on four
							million dollars.
						</Box>
					</Box>
				</Grid>
			</Grid>
		</section>
	);
};

export default Home;
