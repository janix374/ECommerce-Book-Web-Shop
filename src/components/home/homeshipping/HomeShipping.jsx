import React from 'react';
import { Typography, Grid } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { shippmentContainer, shippmentItems, iconColor } from './styles';

const HomeShipping = () => (
	<Grid
		container
		direction='row'
		justifyContent='space-between'
		alignItems='stretch'
		spacing={1}
		sx={shippmentContainer}
	>
		<Grid item xs={12} sm={3} sx={shippmentItems}>
			<BookIcon style={iconColor} />
			<Typography variant='body1' component='p'>
				Bargain books up to 90% off
			</Typography>
		</Grid>
		<Grid item xs={12} sm={3} sx={shippmentItems}>
			<LocalShippingIcon style={iconColor} />
			<Typography variant='body1' component='p'>
				Free shipping on orders $35+
			</Typography>
		</Grid>
		<Grid item xs={12} sm={3} sx={shippmentItems}>
			<MenuBookIcon style={iconColor} />
			<Typography variant='body1' component='p'>
				Cover to Cover Guarantee
			</Typography>
		</Grid>
	</Grid>
);

export default HomeShipping;
