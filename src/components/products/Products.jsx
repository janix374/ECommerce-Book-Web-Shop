import React, { Children } from 'react';
import { Grid, Container } from '@mui/material';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import CategoryNavBar from '../navbars/category/CategoryNavBar';

const Products = ({ products, onAddToCart, title, category }) => {
	console.log('products');
	return (
		<Container maxWidth='lg'>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={2}>
					<CategoryNavBar category={category} />
				</Grid>
				<Grid item xs={12} sm={10}>
					<Outlet />
				</Grid>
			</Grid>
		</Container>
	);
	// return (
	// 	<section>
	// 		<div className={classes.toolbar} />
	// 		<Grid container justifyContent='center' spacing={4}>
	// 			<Typography variant='h2' gutterBottom>
	// 				BOOKS
	// 			</Typography>
	// 		</Grid>
	// 		<Grid container justifyContent='center' spacing={4}>
	// 			{products.map((product) => (
	// 				<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
	// 					<Product product={product} onAddToCart={onAddToCart} />
	// 				</Grid>
	// 			))}
	// 		</Grid>
	// 	</section>
	// );
};

Products.propTypes = {
	products: PropTypes.arrayOf(PropTypes.any).isRequired,
	category: PropTypes.arrayOf(PropTypes.any).isRequired,
	onAddToCart: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
};

export default Products;
