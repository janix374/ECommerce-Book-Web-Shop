import React from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	Typography,
	CardActions,
	CardContent,
	CardMedia,
	Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => {
	const classes = useStyles();
	return (
		<Card className={classes.cardClass}>
			<Link to={`/products/${item.product_id}`}>
				<CardMedia
					image={item.media.source}
					alt={item.name}
					className={classes.media}
				/>
			</Link>
			<CardContent className={classes.cardContent}>
				<Typography variant='h5'>{item.name}</Typography>
				<Typography variant='h6'>
					{item.line_total.formatted_with_symbol}
				</Typography>
			</CardContent>
			<CardActions className={classes.CardAction}>
				<div className={classes.buttons}>
					{/* //Upamtiti callback funkciju zovemo kada imamo neki argument da ubacimo */}
					<Button
						type='button'
						size='small'
						onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
					>
						-
					</Button>
					<Typography>{item.quantity}</Typography>
					<Button
						type='button'
						size='small'
						onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
					>
						+
					</Button>
				</div>
				<Button
					variant='contained'
					type='button'
					color='secondary'
					onClick={() => onRemoveFromCart(item.id)}
				>
					Remove
				</Button>
			</CardActions>
		</Card>
	);
};

CartItem.propTypes = {
	item: PropTypes.oneOfType([PropTypes.object]).isRequired,
	onRemoveFromCart: PropTypes.func.isRequired,
	onUpdateCartQty: PropTypes.func.isRequired,
};

export default CartItem;
