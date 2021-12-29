import React from 'react';
import { Typography, Divider, Button } from '@mui/material';
import {
	Elements,
	CardElement,
	ElementsConsumer,
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PropTypes from 'prop-types';
import Review from './Review';

const stripePromise = loadStripe(' ... ');

const PaymentForm = ({ shippingData, checkoutToken, backStep }) => (
	<>
		<Review checkoutToken={checkoutToken} />
		<Divider />
		<Typography variant='h6' gutterBottom style={{ margine: '20px 0' }}>
			Payment method
		</Typography>
		<Elements stripe={stripePromise}>
			<ElementsConsumer>
				{(elements, stripe) => (
					<form>
						<CardElement />
						<br />
						<br />
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<Button variant='outlined' onClick={backStep}>
								Back
							</Button>
							<Button
								type='submit'
								variant='contained'
								disabled={!stripe}
								color='primary'
							>
								Pay
								{checkoutToken.live.subtotal.formatted_with_symbol}
							</Button>
						</div>
					</form>
				)}
			</ElementsConsumer>
		</Elements>
	</>
);

PaymentForm.propTypes = {
	shippingData: PropTypes.oneOfType([PropTypes.object]).isRequired,
	checkoutToken: PropTypes.oneOfType([PropTypes.any]).isRequired,
	backStep: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default PaymentForm;
