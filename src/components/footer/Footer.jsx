import React from 'react';
import {
	Container,
	Typography,
	Grid,
	Box,
	Link as LinkNav,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import {
	footerContainer,
	iconStyleContainer,
	iconStyle,
	gridContainer,
	linkStyle,
} from './styles';

const Footer = () => (
	<Container sx={footerContainer} maxWidth={false}>
		<Grid
			container
			justifyContent='center'
			alignItems='stretch'
			sx={gridContainer}
		>
			<Grid item xs={12} sm={6}>
				<Typography variant='h6' component='h2'>
					Supporting Local Bookstores
				</Typography>
				<Box sx={iconStyleContainer}>
					<Typography variant='body1' component='p'>
						Follow us
					</Typography>
					<LinkNav
						href='https://twitter.com/?lang=en'
						target='_blank'
						rel='noreferrer'
					>
						<TwitterIcon color='action' sx={iconStyle} />
					</LinkNav>
					<LinkNav
						href='https://www.facebook.com/'
						target='_blank'
						rel='noreferrer'
					>
						<FacebookOutlinedIcon color='action' sx={iconStyle} />
					</LinkNav>
					<LinkNav
						href='https://www.instagram.com/'
						target='_blank'
						rel='noreferrer'
					>
						<InstagramIcon color='action' sx={iconStyle} />
					</LinkNav>
				</Box>
			</Grid>
			<Grid item xs={12} sm={6} sx={linkStyle}>
				<List>
					<ListItem disablePadding>
						<Link to='about'>
							<ListItemText primary='About' />
						</Link>
					</ListItem>
					<ListItem disablePadding>
						<Link to='policy'>
							<ListItemText primary='Privacy Policy' />
						</Link>
					</ListItem>
				</List>
			</Grid>
		</Grid>
	</Container>
);

export default Footer;
