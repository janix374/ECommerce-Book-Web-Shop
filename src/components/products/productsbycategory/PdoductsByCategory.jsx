import React from 'react';
import PropTypes from 'prop-types';

const PdoductsByCategory = ({ products, onAddToCart, title }) => {
	console.log('PdoductsByCategory');
	return <div>{title}</div>;
};

PdoductsByCategory.propTypes = {
	products: PropTypes.arrayOf(PropTypes.any).isRequired,
	onAddToCart: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
};

export default PdoductsByCategory;
