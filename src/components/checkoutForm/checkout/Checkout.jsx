import React, { useState, useEffect } from 'react';
import {
	Paper,
	Stepper,
	Step,
	StepLabel,
	Typography,
	Box,
	Alert,
} from '@mui/material';
import PropTypes from 'prop-types';
import PaymentForm from './PaymentForm';
import Confirmation from '../confirmation/Confirmation';
import AddresForm from './AddresForm';
import { commerce } from '../../../lib/commerce';

const steps = ['Shipping address', 'Payment details'];

const Checkout = ({ cart }) => {
	const [activeStep, setActiveStep] = useState(0);
	const [checkoutToken, setCheckoutToken] = useState(null);
	const [shippingData, setShippingData] = useState({});
	const [errors, setErrors] = useState(false);

	useEffect(() => {
		if (cart.id) {
			const generateToken = async () => {
				try {
					const token = await commerce.checkout.generateToken(cart.id, {
						type: 'cart',
					});
					setCheckoutToken(token);
				} catch (error) {
					setErrors(true);
				}
			};
			generateToken();
		}
	}, [cart]);

	const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
	const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

	const next = (data) => {
		setShippingData(data);
		nextStep();
	};

	const Form = () =>
		activeStep === 0 ? (
			<AddresForm checkoutToken={checkoutToken} next={next} />
		) : (
			<PaymentForm
				shippingData={shippingData}
				checkoutToken={checkoutToken}
				backStep={backStep}
			/>
		);

	return (
		<>
			<div />
			<main>
				<Paper>
					<Typography variant='h4' algin='center'>
						Checkout
					</Typography>
					<Stepper activeStep={activeStep}>
						{steps.map((step) => (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						))}
					</Stepper>
					{activeStep === steps.length ? (
						<Confirmation />
					) : (
						checkoutToken && <Form />
					)}
				</Paper>
				<Box mt={3}>
					{errors && (
						<Alert severity='error' m={5}>
							Problem with token!
						</Alert>
					)}
				</Box>
			</main>
		</>
	);
};

Checkout.propTypes = {
	cart: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Checkout;
