import React, { Children } from 'react';
import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Privremana from '../privremena/Privremana';
import CategoryNavBar from '../navbars/category/CategoryNavBar';
// import Product from './product/Product';
// import useStyles from './styles';

const Products = ({ products, onAddToCart, title, category }) => {
	// const classes = useStyles();

	// if (products.length === 0) {
	// 	return (
	// 		<section className={classes.content}>
	// 			<div className={classes.toolbar} />
	// 			<Grid container justifyContent='center' spacing={4}>
	// 				<Typography variant='h2' gutterBottom>
	// 					Can not load books
	// 				</Typography>
	// 			</Grid>
	// 		</section>
	// 	);
	// }

	console.log('product');
	return (
		<section>
			<Grid container spacing={2}>
				<Grid item xs={12} sm={2}>
					<CategoryNavBar category={category} />
				</Grid>
				<Grid item xs={12} sm={10}>
					<Outlet />
				</Grid>
			</Grid>
		</section>
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
