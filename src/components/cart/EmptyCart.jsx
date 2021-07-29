import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const EmptyCart = () => {
	const classes = useStyles();
	return (
		<Typography variant='subtitle1'>
			You dont have items in your shopping cart,
			<Link to='/products' className={classes.Link}>
				start adding some!
			</Link>
		</Typography>
	);
};

export default EmptyCart;
