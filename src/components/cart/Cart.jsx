import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, Box } from '@mui/material';
import EmptyCart from './EmptyCart';
import FilledCart from './FilledCart';
import GoBackButton from '../common/goback/GoBackButton';

const Cart = ({
	cart,
	handleUpdateCartQty,
	handleRemoveFromCart,
	handleEmptyCart,
}) => {
	if (!cart.line_items) return 'Loading...';

	return (
		<Container>
			<div />
			<Typography variant='h4' component='h4' gutterBottom>
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
			<Box mt={5}>
				<GoBackButton />
			</Box>
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
