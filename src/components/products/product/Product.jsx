import React from 'react';
import {
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Typography,
	IconButton,
} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import PropTypes from 'prop-types';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardMedia
				className={classes.media}
				image={product.media.source}
				title={product.name}
			/>
			<CardContent>
				<div className={classes.cardContent}>
					<Typography variant='h6' gutterBottom>
						{product.name}
					</Typography>
					<Typography variant='h6'>
						{product.price.formatted_with_symbol}
					</Typography>
				</div>
				<div className={classes.cardContentDescription}>
					<Typography
						dangerouslySetInnerHTML={{ __html: product.description }}
						variant='body2'
						color='textSecondary'
					/>
				</div>
			</CardContent>
			<CardActions disableSpacing className={classes.CardActions}>
				<IconButton
					arial-label='Add to Cart'
					onClick={() => onAddToCart(product.id, 1)}
				>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	);
};

Product.propTypes = {
	product: PropTypes.oneOfType([PropTypes.object]).isRequired,
	onAddToCart: PropTypes.func.isRequired,
};

export default Product;
