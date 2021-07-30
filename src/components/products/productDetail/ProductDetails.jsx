import React, { useEffect, useState } from 'react';
import { Typography, Grid, IconButton, Button } from '@material-ui/core';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { AddShoppingCart } from '@material-ui/icons';
import PropTypes from 'prop-types';
import useStyles from './styles';
import { commerce } from '../../../lib/commerce';

const ProductDetails = ({ onAddToCart }) => {
	const classes = useStyles();
	const match = useRouteMatch();
	const [productsDetails, setProductsDetails] = useState({});
	const [bookDoesNotExists, setBookDoesNotExists] = useState(false);
	const history = useHistory();

	const fetchOneProduct = async (productId) => {
		try {
			const product = await commerce.products.retrieve(productId);
			setProductsDetails(product);
		} catch (error) {
			setBookDoesNotExists(true);
		}
	};

	const handleGoBack = () => {
		if (history.length > 1) {
			history.goBack();
		}
		history.push('/products');
	};

	useEffect(() => {
		if (match.params.id) {
			fetchOneProduct(match.params.id);
		}
	}, []);

	if (bookDoesNotExists) {
		return (
			<section className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container justifyContent='center' spacing={4}>
					<Typography variant='h2'>Book Does Not Exists</Typography>
				</Grid>
			</section>
		);
	}

	return (
		<section className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justifyContent='center' spacing={4}>
				<Grid item xs={12}>
					<Typography variant='h3' gutterBottom align='center'>
						Book Details
					</Typography>
				</Grid>
				{Object.keys(productsDetails).length === 0 ? (
					'Loading...'
				) : (
					<>
						<Grid item xs={12} sm={5}>
							<div>
								<img
									src={`${productsDetails.media.source}`}
									alt='book'
									className={classes.DetailsImage}
								/>
							</div>
						</Grid>
						<Grid item xs={12} sm={7}>
							<div className={classes.Description}>
								<Typography variant='h6'>{productsDetails.name}</Typography>
								<Typography variant='h6' gutterBottom>
									Price: {productsDetails.price.formatted_with_symbol}
								</Typography>
								<Typography variant='body1' color='textSecondary'>
									Description
								</Typography>
								<Typography
									dangerouslySetInnerHTML={{
										__html: productsDetails.description,
									}}
									variant='body1'
									color='textSecondary'
								/>
							</div>
							<div className={classes.Description}>
								<Typography variant='h6' color='textSecondary'>
									Add to cart
								</Typography>
								<IconButton
									arial-label='Add to Cart'
									title='Add to Cart'
									onClick={() => onAddToCart(productsDetails.id, 1)}
								>
									<AddShoppingCart />
								</IconButton>
							</div>
							<div className={classes.Description}>
								<Button
									variant='contained'
									color='primary'
									onClick={handleGoBack}
								>
									Go Back
								</Button>
							</div>
						</Grid>
					</>
				)}
			</Grid>
		</section>
	);
};

ProductDetails.propTypes = {
	onAddToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
