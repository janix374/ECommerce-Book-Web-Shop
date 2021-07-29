import React from 'react';
import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	Badge,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/commerce.png';
import useStyles from './styles';

const Navbar = ({ totalItems }) => {
	const classes = useStyles();
	const location = useLocation();
	return (
		<>
			<AppBar position='fixed' className={classes.appBar} color='inherit'>
				<Toolbar>
					<Typography
						component={Link}
						to='/products'
						variant='h6'
						className={classes.title}
						color='inherit'
					>
						<img
							src={logo}
							alt='Commerce.js'
							height='25px'
							className={classes.image}
						/>
						Cummers.js
					</Typography>
					<div className={classes.grow} />
					{location.pathname.includes('/products') && (
						<div className={classes.button}>
							<IconButton
								component={Link}
								to='/cart'
								arial-label='show cart item'
								color='inherit'
							>
								<Badge badgeContent={totalItems} color='secondary'>
									<ShoppingCartIcon />
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
