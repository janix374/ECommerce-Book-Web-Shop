import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { appBarStayle } from './styles';

const Navbar = ({ totalItems }) => {
	const location = useLocation();
	return (
		<>
			<AppBar position='fixed' color='secondary' sx={appBarStayle}>
				<Toolbar>
					<Typography component={Link} to='/' variant='h6' color='inherit'>
						Home
					</Typography>
					{location.pathname.includes('/products') && (
						<div>
							<IconButton
								component={Link}
								to='/cart'
								arial-label='show cart item'
								color='inherit'
							>
								<Badge badgeContent={totalItems} color='secondary'>
									<AddShoppingCartIcon />
								</Badge>
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</>
	);
};

Navbar.propTypes = {
	totalItems: PropTypes.number,
};

Navbar.defaultProps = {
	totalItems: 0,
};

export default Navbar;
