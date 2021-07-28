import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Product from './product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
	const classes = useStyles();
	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justifyContent='center' spacing={4}>
				<Typography variant='h2' gutterBottom>
					BOOKS
				</Typography>
			</Grid>
			<Grid container justifyContent='center' spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} onAddToCart={onAddToCart} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

Products.propTypes = {
	products: PropTypes.arrayOf(PropTypes.any).isRequired,
	onAddToCart: PropTypes.func.isRequired,
};

export default Products;
