/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { boldText, starsStyle } from './styles';

const HomeReviews = () => (
	<Box component='div' mt={4} mb={4}>
		<Box component='div' mt={4} textAlign='center'>
			{Array(5)
				.fill()
				.map((_, i) => (
					<StarIcon sx={starsStyle} key={i} />
				))}
		</Box>
		<Typography variant='h5' component='h5' textAlign='center'>
			All books have arrived on time and in the expec ted condition. There is an
			extremely wide variety of books at very good prices.
		</Typography>
		<Typography variant='body1' component='p' textAlign='center' m={2}>
			regina shanley
		</Typography>
		<Typography
			variant='body1'
			component='p'
			textAlign='center'
			sx={boldText}
			m={2}
		>
			Posted
		</Typography>
	</Box>
);

export default HomeReviews;
