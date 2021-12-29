/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { boldText, starsStyle } from './styles';
import randomReviews from '../../../lib/randomreviews';

const HomeReviews = () => {
	const [oneReview, setOneReview] = useState(randomReviews[0]);

	useEffect(() => {
		const interval = setInterval(() => {
			setOneReview(
				randomReviews[Math.floor(Math.random() * randomReviews.length)]
			);
		}, 30000);
		return () => clearInterval(interval);
	}, [oneReview]);
	return (
		<Box component='div' mt={4} mb={4}>
			<Box component='div' mt={4} textAlign='center'>
				{[...Array(oneReview.stars)].map((n, i) => (
					<StarIcon sx={starsStyle} key={i} />
				))}
			</Box>
			<Typography variant='h5' component='h5' textAlign='center'>
				{oneReview?.review}
			</Typography>
			<Typography variant='body1' component='p' textAlign='center' m={2}>
				{oneReview?.name}
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
			<Typography variant='body2' component='p' textAlign='center' m={2}>
				250 reviews on book shop | Latest review 30 minutes ago
			</Typography>
		</Box>
	);
};

export default HomeReviews;
