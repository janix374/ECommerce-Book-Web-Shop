import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Badge,
	Grid,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { appBarStayle } from './styles';

const Navbar = ({ totalItems }) => (
	<>
		<AppBar position='fixed' color='secondary' sx={appBarStayle}>
			<Toolbar>
				<Grid justifyContent='space-between' container spacing={12}>
					<Grid item>
						<Typography component={Link} to='/' variant='h6' color='inherit'>
							Home
						</Typography>
					</Grid>
					<Grid item>
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
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	</>
);

Navbar.propTypes = {
	totalItems: PropTypes.number,
};

Navbar.defaultProps = {
	totalItems: 0,
};

export default Navbar;
