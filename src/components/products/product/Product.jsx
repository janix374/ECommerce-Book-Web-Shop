import React from 'react';
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	Button,
	Box,
} from '@mui/material';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { imageStayle, cardStyle, productName, buttonStyle } from './styles';

const Product = ({ product, onAddToCart }) => (
	<Card sx={cardStyle}>
		<Box compnent='div' sx={imageStayle}>
			<Link to={`/product/${product.id}`}>
				<img src={product?.image.url} alt='sise' />
			</Link>
		</Box>
		<CardContent>
			<Typography
				variant='body1'
				component='p'
				style={productName}
				gutterBottom
			>
				{product.name}
			</Typography>
			<Typography variant='body1' component='p'>
				price: {product?.price.formatted_with_symbol}
			</Typography>
		</CardContent>
		<CardActions>
			<Button
				variant='contained'
				sx={buttonStyle}
				onClick={() => onAddToCart(product.id, 1)}
				disabled={product.is.sold_out}
			>
				Add to Cart
			</Button>
		</CardActions>
	</Card>
);

Product.propTypes = {
	product: PropTypes.oneOfType([PropTypes.object]).isRequired,
	onAddToCart: PropTypes.func.isRequired,
};

export default Product;
