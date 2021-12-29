import React from 'react';
import { Box } from '@mui/material';
import newYear from '../../../assets/images/newyear.jpg';
import { noProductStyles } from './styles';

const NoProducts = () => (
	<Box component='div' sx={noProductStyles}>
		<img src={newYear} alt='new year' />
	</Box>
);

export default NoProducts;
