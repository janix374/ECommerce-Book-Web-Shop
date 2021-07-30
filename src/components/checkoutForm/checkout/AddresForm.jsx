import React, { useState, useEffect } from 'react';
import {
	InputLabel,
	Select,
	MenuItem,
	Button,
	Typography,
	Grid,
	Box,
} from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import { commerce } from '../../../lib/commerce';
import FormInput from './CustomTextField';

const AddresForm = ({ checkoutToken, next }) => {
	const methods = useForm();
	const [shippingCountries, setShippingCountries] = useState([]);
	const [shippingCountry, setShippingCountry] = useState('');
	const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
	const [shippingSubdivision, setShippingSubdivision] = useState('');
	const [shippingOptions, setShippingOptions] = useState([]);
	const [shippingOption, setShippingOption] = useState('');
	const [errors, setErrors] = useState(false);

	/*
	// The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
	// Object.entries(shippingCountries) convert from object to array, than, through the map, it turns into a normal arry
	// and destructuring array [code, name] give as value to object property.
	*/
	const countries = Object.entries(shippingCountries).map(([code, name]) => ({
		id: code,
		label: name,
	}));

	const subdivisions = Object.entries(shippingSubdivisions).map(
		([code, name]) => ({
			id: code,
			label: name,
		})
	);

	// SO - shipping options
	// const options = shippingOptions.map((SO) => ({
	// 	id: SO.id,
	// 	label: `${SO.description}-(${SO.price.formatted_with_symbol})`,
	// }));

	const fetchShippingCountries = async (checkoutTokenId) => {
		try {
			const response = await commerce.services.localeListShippingCountries(
				checkoutTokenId
			);
			setShippingCountries(response.countries);
			setShippingCountry(Object.keys(response.countries)[0]);
		} catch (error) {
			setErrors(true);
		}
	};

	const fetchSubdivisions = async (countryCode) => {
		try {
			const response = await commerce.services.localeListSubdivisions(
				countryCode
			);
			setShippingSubdivisions(response.subdivisions);
			setShippingSubdivision(Object.keys(response.subdivisions)[0]);
		} catch (error) {
			setErrors(true);
		}
	};

	// const fetchShippingOptions = async (
	// 	checkoutTokenId,
	// 	country,
	// 	region = null
	// ) => {
	// 	try {
	// 		const getoptions = await commerce.checkout.getShippingOptions(
	// 			checkoutTokenId,
	// 			{ country, region }
	// 		);
	// 		console.log(getoptions);
	// 		// setShippingOptions(getoptions);
	// 		// setShippingOption(getoptions[0].id);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		if (checkoutToken !== null) {
			fetchShippingCountries(checkoutToken.id);
		}
	}, []);

	useEffect(() => {
		if (shippingCountry) {
			fetchSubdivisions(shippingCountry);
		}
	}, [shippingCountry]);

	// useEffect(() => {
	// 	if (shippingSubdivision) {
	// 		fetchShippingOptions(checkoutToken.id, 'US', 'CA');
	// 	}
	// }, [shippingSubdivision]);

	return (
		<>
			<Typography varinat='h6' gutterBottom>
				Shipping Address
			</Typography>
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit((data) =>
						next({
							...data,
							shippingCountry,
							shippingSubdivision,
							shippingOption,
						})
					)}
				>
					<Grid container spacing={3}>
						<FormInput name='firstName' label='First Name' />
						<FormInput name='lastName' label='Last Name' />
						<FormInput name='address1' label='Address' />
						<FormInput name='email' label='Emial' />
						<FormInput name='city' label='City' />
						<FormInput name='zip' label='ZIP / Postal code' />
						<Grid item xs={12} sm={6}>
							<InputLabel>Shipping Country</InputLabel>
							<Select
								value={shippingCountry}
								fullWidth
								onChange={(e) => setShippingCountry(e.target.value)}
							>
								{countries.map((country) => (
									<MenuItem key={country.id} value={country.id}>
										{country.label}
									</MenuItem>
								))}
							</Select>
						</Grid>
						<Grid item xs={12} sm={6}>
							<InputLabel>Shipping Subdivisions</InputLabel>
							<Select
								value={shippingSubdivision}
								fullWidth
								onChange={(e) => setShippingSubdivision(e.target.value)}
							>
								{subdivisions.map((subdivision) => (
									<MenuItem key={subdivision.id} value={subdivision.id}>
										{subdivision.label}
									</MenuItem>
								))}
							</Select>
						</Grid>
						{/* <Grid item xs={12} sm={6}>
							<InputLabel>Shipping Options</InputLabel>
							<Select
								value={shippingOption}
								fullWidth
								onChange={(e) => setShippingOption(e.target.value)}
							>
								{options.map((option) => (
									<MenuItem key={option.id} value={option.id}>
										{option.label}
									</MenuItem>
								))}
							</Select>
						</Grid> */}
					</Grid>
					<br />
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<Button component={Link} to='/cart' variant='outlined'>
							Back to Cart
						</Button>
						<Button type='submit' variant='contained' color='primary'>
							Next
						</Button>
					</div>
				</form>
			</FormProvider>
			<Box mt={3}>
				{errors && (
					<Alert severity='error' m={5}>
						Problem With Shipping Countries
					</Alert>
				)}
			</Box>
		</>
	);
};

AddresForm.propTypes = {
	checkoutToken: PropTypes.oneOfType([PropTypes.any]).isRequired,
	next: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default AddresForm;
