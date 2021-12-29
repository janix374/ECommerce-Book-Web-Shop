import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const EmptyCart = () => (
	<Typography variant='subtitle1'>
		You dont have items in your shopping cart,
		<Link to='/products'>start adding some!</Link>
	</Typography>
);

export default EmptyCart;
