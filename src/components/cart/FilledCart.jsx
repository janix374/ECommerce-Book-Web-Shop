import React from 'react';
import { Typography, Button, Grid, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItem from './cartitem/CartItem';
import { buttonStyle } from './styles';

const FilledCart = ({
	cart,
	handleEmptyCart,
	handleRemoveFromCart,
	handleUpdateCartQty,
}) => (
	<Grid container spacing={1}>
		<Grid container item xs={12} spacing={4}>
			{cart.line_items.map((item) => (
				<Grid item xs={12} sm={4} key={item.id}>
					<CartItem
						item={item}
						onRemoveFromCart={handleRemoveFromCart}
						onUpdateCartQty={handleUpdateCartQty}
					/>
				</Grid>
			))}
		</Grid>
		<Grid container item xs={12} mt={5}>
			<Box container='div'>
				<Box>
					<Typography variant='h5'>
						Subtotal: {cart.subtotal.formatted_with_symbol}
					</Typography>
				</Box>
				<Box sx={buttonStyle}>
					<Button
						size='large'
						type='button'
						variant='contained'
						color='secondary'
						onClick={handleEmptyCart}
					>
						Empty Cart
					</Button>
					<Button
						size='large'
						type='button'
						variant='contained'
						color='primary'
						component={Link}
						to='/checkout'
					>
						Checkout
					</Button>
				</Box>
			</Box>
		</Grid>
	</Grid>
);

FilledCart.propTypes = {
	cart: PropTypes.oneOfType([PropTypes.object]).isRequired,
	handleEmptyCart: PropTypes.func.isRequired,
	handleRemoveFromCart: PropTypes.func.isRequired,
	handleUpdateCartQty: PropTypes.func.isRequired,
};

export default FilledCart;
