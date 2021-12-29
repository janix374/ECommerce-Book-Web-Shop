import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button, Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GoBackButton from '../../common/goback/GoBackButton';
import { commerce } from '../../../lib/commerce';
import {
	imageContainer,
	productName,
	buttonStyle,
	buttonAvailable,
	buttonNotAvailable,
} from './styles';

const ProductDetails = ({ onAddToCart }) => {
	const [productsDetails, setProductsDetails] = useState({});
	const [bookDoesNotExists, setBookDoesNotExists] = useState(false);
	const navigate = useNavigate();
	const params = useParams();

	const fetchOneProduct = async (productId) => {
		try {
			const product = await commerce.products.retrieve(productId);
			setProductsDetails(product);
		} catch (error) {
			setBookDoesNotExists(true);
		}
	};

	useEffect(() => {
		if (params.id) {
			fetchOneProduct(params.id);
		}
	}, []);

	if (bookDoesNotExists) {
		return (
			<Box component='div' mt={5}>
				<Grid container justifyContent='center' spacing={4}>
					{params && (
						<Typography variant='h4' component='h4'>
							Book Does Not Exists
						</Typography>
					)}
				</Grid>
			</Box>
		);
	}

	return (
		<>
			{Object.keys(productsDetails).length === 0 ? (
				'Loading...'
			) : (
				<Grid container justifyContent='center' spacing={4}>
					<Grid item xs={12} sm={5}>
						<Box sx={imageContainer}>
							<img src={`${productsDetails?.media.source}`} alt='book' />
						</Box>
					</Grid>
					<Grid item xs={12} sm={7}>
						<Typography
							variant='body1'
							component='p'
							sx={productName}
							gutterBottom
						>
							{productsDetails.name}
						</Typography>
						<Box mt={2}>
							{productsDetails.is.sold_out ? (
								<Box sx={buttonNotAvailable}>
									<CheckCircleIcon /> <span>not available</span>
								</Box>
							) : (
								<Box sx={buttonAvailable}>
									<CheckCircleIcon /> <span>available</span>
								</Box>
							)}
						</Box>
						<Box sx={buttonStyle}>
							<Button
								variant='contained'
								onClick={() => onAddToCart(productsDetails.id, 1)}
								startIcon={<AddShoppingCartIcon />}
								disabled={productsDetails.is.sold_out}
							>
								Add to Cart
							</Button>
						</Box>
						<Box mt={2}>
							<Typography variant='body1' component='p'>
								Description
							</Typography>
							<Typography
								dangerouslySetInnerHTML={{
									__html: productsDetails?.description,
								}}
								variant='body1'
								color='textSecondary'
							/>
						</Box>
						<Box mt={2}>
							<Typography variant='body2' component='p'>
								Price: {productsDetails?.price.formatted_with_symbol}
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<GoBackButton />
					</Grid>
				</Grid>
			)}
		</>
	);
};

ProductDetails.propTypes = {
	onAddToCart: PropTypes.func.isRequired,
};

export default ProductDetails;

// eslint-disable-next-line no-lone-blocks
{
	/* <section>
<div />
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
					/>
				</div>
			</Grid>
			<Grid item xs={12} sm={7}>
				<div>
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
</section> */
}
