import React from 'react';
import { TextField, Grid } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

const FormInput = ({ name, label }) => {
	const { control } = useFormContext();
	return (
		<Grid item xs={12} sm={6}>
			<Controller
				name={name}
				control={control}
				render={({ field }) => <TextField fullWidth label={label} required />}
			/>
		</Grid>
	);
};

FormInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

export default FormInput;
