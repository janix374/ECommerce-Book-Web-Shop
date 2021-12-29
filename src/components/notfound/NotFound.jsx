import React from 'react';
import { Box } from '@mui/material';
import errorPhoto from '../../assets/images/404.png';
import { errorPhotoStyle } from './styles';

const NotFound = () => (
	<Box sx={errorPhotoStyle}>
		<img src={errorPhoto} alt='404' />
	</Box>
);

export default NotFound;
