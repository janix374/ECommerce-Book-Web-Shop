import React, { Children } from 'react';
import { Grid, Container } from '@mui/material';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import CategoryNavBar from '../navbars/category/CategoryNavBar';

const Products = ({ title, category }) => (
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

Products.propTypes = {
	category: PropTypes.arrayOf(PropTypes.any).isRequired,
	title: PropTypes.string.isRequired,
};

export default Products;
