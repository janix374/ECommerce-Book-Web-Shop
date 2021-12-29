import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

const Review = ({ checkoutToken }) => (
	<>
		<Typography variant='h6' gutterBottom>
			Order Summery
		</Typography>
		<List disablePadding>
			{checkoutToken.live.line_items.map((product) => (
				<ListItem styles={{ padding: '10px 0' }} key={product.name}>
					<ListItemText
						primary={product.name}
						secondary={`Quantity: ${product.quantity}`}
					/>
					<Typography variant='body2'>
						{product.line_total.formattes_with_symbol}
					</Typography>
				</ListItem>
			))}
			<ListItem styles={{ padding: '10px 0' }}>
				<ListItemText primary='Total' />
				<Typography variant='subtitle1' styles={{ fontWeight: 700 }}>
					{checkoutToken.live.subtotal.formatted_with_symbol}
				</Typography>
			</ListItem>
		</List>
	</>
);

Review.propTypes = {
	checkoutToken: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default Review;
