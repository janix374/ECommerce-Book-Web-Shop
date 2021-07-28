import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography } from '@material-ui/core';
import useStyles from './styles';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';

const Cart = ({
	cart,
	handleUpdateCartQty,
	handleRemoveFromCart,
	handleEmptyCart,
}) => {
	const classes = useStyles();

	if (!cart.line_items) return 'Loading...';

	return (
		<Container>
			<div className={classes.toolbar} />
			<Typography className={classes.title} variant='h3' gutterBottom>
				Your Shopping Cart
			</Typography>
			{!cart.line_items.length ? (
				<EmptyCart />
			) : (
				<FilledCart
					cart={cart}
					handleEmptyCart={handleEmptyCart}
					handleUpdateCartQty={handleUpdateCartQty}
					handleRemoveFromCart={handleRemoveFromCart}
				/>
			)}
		</Container>
	);
};

Cart.propTypes = {
	cart: PropTypes.oneOfType([PropTypes.object]).isRequired,
	handleUpdateCartQty: PropTypes.func.isRequired,
	handleRemoveFromCart: PropTypes.func.isRequired,
	handleEmptyCart: PropTypes.func.isRequired,
};

export default Cart;
