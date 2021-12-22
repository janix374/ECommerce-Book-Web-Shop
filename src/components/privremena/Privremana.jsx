import React from 'react';
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Privremana = ({ a }) => {
	console.log('privremena');
	return (
		<div>
			<p>{a}</p>
		</div>
	);
};

export default Privremana;
