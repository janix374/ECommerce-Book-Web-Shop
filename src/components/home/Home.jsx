import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import HomeCategoryComponent from './homecategory/HomeCategoryComponent';
import homeCategory from '../../lib/homecategoryitems';
import SliderComponent from './slider/SliderComponent';
import HomeShipping from './homeshipping/HomeShipping';
import HomeReviews from './homereviews/HomeReviews';
import { sectionStyle, sectionStyleCategory } from './styles';

const Home = () => (
	<div>
		<section>
			<SliderComponent />
		</section>
		<section style={sectionStyle}>
			<HomeShipping />
		</section>
		<section style={sectionStyleCategory}>
			<Typography variant='h3' component='h3' textAlign='center' mb={5}>
				Popular Categories in Books
			</Typography>
			<Grid container spacing={2}>
				{homeCategory.map((item) => (
					<Grid item xs={12} sm={6} md={4} key={item.id}>
						<HomeCategoryComponent {...item} />
					</Grid>
				))}
			</Grid>
		</section>
		<section style={sectionStyle}>
			<HomeReviews />
		</section>
	</div>
);

export default Home;
