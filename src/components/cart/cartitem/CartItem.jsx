import React from 'react';
import PropTypes from 'prop-types';
import {
	Card,
	Typography,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Box,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from 'react-router-dom';
import {
	pictureContainer,
	cardContentStyle,
	addItemsContainer,
} from './styles';

const CartItem = ({ item, onRemoveFromCart, onUpdateCartQty }) => (
	<Card>
		<Box component='div' sx={pictureContainer}>
			<Link to={`/product/${item?.product_id}`}>
				<img src={item?.media.source} alt={item.name} />
			</Link>
		</Box>
		<CardContent sx={cardContentStyle}>
			<Typography variant='p'>{item.name}</Typography>
			<br />
			<Typography variant='p'>
				{item.line_total.formatted_with_symbol}
			</Typography>
		</CardContent>
		<CardActions
			sx={{
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Box component='div' sx={addItemsContainer}>
				<Button
					type='button'
					size='small'
					onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
				>
					<RemoveIcon />
				</Button>
				<Typography>{item.quantity}</Typography>
				<Button
					type='button'
					size='small'
					onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
				>
					<AddIcon />
				</Button>
			</Box>
			<Box component='div'>
				<Button
					variant='contained'
					type='button'
					color='secondary'
					onClick={() => onRemoveFromCart(item.id)}
				>
					Remove
				</Button>
			</Box>
		</CardActions>
	</Card>
);

CartItem.propTypes = {
	item: PropTypes.oneOfType([PropTypes.object]).isRequired,
	onRemoveFromCart: PropTypes.func.isRequired,
	onUpdateCartQty: PropTypes.func.isRequired,
};

export default CartItem;

// eslint-disable-next-line no-lone-blocks
{
	/* <Box sx={cardItemContainer}>
				<Box sx={{ width: '50px' }}>
					<Link to={`/product/${item.id}`}>
						<img src={item?.media.source} alt={item.name} />
					</Link>
					<p>fdfdfd</p>
				</Box>
				<CardContent sx={cardContentStyle}>
					<Typography variant='p'>{item.name}</Typography>
					<br />
					<Typography variant='p'>
						{item.line_total.formatted_with_symbol}
					</Typography>
				</CardContent>
			</Box>
			<CardActions>
				<Box>
					<Button
						type='button'
						size='small'
						onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
					>
						-
					</Button>
					<Typography>{item.quantity}</Typography>
					<Button
						type='button'
						size='small'
						onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
					>
						+
					</Button>
				</Box>
				<Button
					variant='contained'
					type='button'
					color='secondary'
					onClick={() => onRemoveFromCart(item.id)}
				>
					Remove
				</Button>
			</CardActions>
*/
}
