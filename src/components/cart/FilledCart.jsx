import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItem from './cartitem/CartItem';
import useStyles from './styles';

const FilledCart = ({
	cart,
	handleEmptyCart,
	handleRemoveFromCart,
	handleUpdateCartQty,
}) => {
	const classes = useStyles();
	return (
		<>
			<Grid container spacing={3}>
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
			<div className={classes.cardDetails}>
				<Typography variant='h4'>
					Subtotal: {cart.subtotal.formatted_with_symbol}
				</Typography>
				<div>
					<Button
						className={classes.emptyButton}
						size='large'
						type='button'
						variant='contained'
						color='secondary'
						onClick={handleEmptyCart}
					>
						Empty Cart
					</Button>
					<Button
						className={classes.checkoutButton}
						size='large'
						type='button'
						variant='contained'
						color='primary'
						component={Link}
						to='/checkout'
					>
						Checkout
					</Button>
				</div>
			</div>
		</>
	);
};

FilledCart.propTypes = {
	cart: PropTypes.oneOfType([PropTypes.object]).isRequired,
	handleEmptyCart: PropTypes.func.isRequired,
	handleRemoveFromCart: PropTypes.func.isRequired,
	handleUpdateCartQty: PropTypes.func.isRequired,
};

export default FilledCart;
