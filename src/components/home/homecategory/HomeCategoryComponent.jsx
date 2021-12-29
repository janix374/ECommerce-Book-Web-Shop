import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { styleBox1, styleBox2, styleBox3, styleMainBox } from './styles';

const HomeCategoryComponent = (props) => {
	const { path, frontimg, backgroundimg, styleComponen, title } = props;
	return (
		<Box component='div' sx={styleMainBox}>
			<Link to={`products/${path}`}>
				<Box
					sx={{
						...styleBox1,
						backgroundImage: `url(${backgroundimg})`,
					}}
				>
					<Box component='div' sx={{ ...styleBox2, ...styleComponen }}>
						<img src={frontimg} alt='' />
					</Box>
				</Box>
				<Box sx={styleBox3}>
					<Typography variant='h6' component='p' textAlign='center'>
						{title}
					</Typography>
				</Box>
			</Link>
		</Box>
	);
};

HomeCategoryComponent.propTypes = {
	styleComponen: PropTypes.shape({}).isRequired,
	backgroundimg: PropTypes.string.isRequired,
	frontimg: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
		.isRequired,
	title: PropTypes.string.isRequired,
	path: PropTypes.string.isRequired,
};

export default HomeCategoryComponent;
