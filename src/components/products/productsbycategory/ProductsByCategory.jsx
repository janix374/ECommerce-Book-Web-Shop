import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { commerce } from '../../../lib/commerce';
import Product from '../product/Product';

const ProductsByCategory = ({ onAddToCart, title, path }) => {
	const [products, setProducts] = useState([]);
	const [errorProductsByCategory, setErrorProductsByCategory] = useState(false);
	const [loading, setLoading] = useState(false);

	const fetchProducts = async () => {
		setLoading(true);
		setProducts([]);
		try {
			const { data } = await commerce.products.list({
				category_slug: [path],
			});
			setProducts(data);
			setLoading(false);
		} catch (error) {
			setErrorProductsByCategory(true);
		}
	};

	useEffect(() => {
		let mounted = true;
		fetchProducts();
		return () => {
			mounted = false;
		};
	}, [path]);

	if (errorProductsByCategory) {
		return <div>no data</div>;
	}

	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant='h3' component='h3' align='center'>
					{title}
				</Typography>
			</Grid>
			{products &&
				products.map((product) => (
					<Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
						<Product onAddToCart={onAddToCart} product={product} />
					</Grid>
				))}
		</Grid>
	);
};

ProductsByCategory.propTypes = {
	onAddToCart: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
};

export default ProductsByCategory;
