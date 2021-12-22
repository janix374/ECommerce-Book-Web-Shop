import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import HomeCategoryComponent from './homecategory/HomeCategoryComponent';
import backcrime from '../../assets/images/backcrime.jpg';
import frontcrime from '../../assets/images/frontcrime.png';
import homeCategory from '../../lib/homecategoryitems';

const Home = () => {
	console.log(homeCategory);
	return (
		<section>
			<Grid container spacing={2}>
				{homeCategory.map((item) => (
					<Grid item xs={12} sm={6} md={4} key={item.id}>
						<HomeCategoryComponent {...item} />
					</Grid>
				))}
			</Grid>
		</section>
	);
};

export default Home;
