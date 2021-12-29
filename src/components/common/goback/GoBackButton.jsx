import React from 'react';
import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { goBackStyle } from './styles';

const GoBackButton = () => {
	const navigate = useNavigate();
	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<Box sx={goBackStyle}>
			<Button variant='contained' color='primary' onClick={handleGoBack}>
				Go Back
			</Button>
		</Box>
	);
};

export default GoBackButton;
