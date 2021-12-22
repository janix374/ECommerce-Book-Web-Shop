import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
	List,
	ListSubheader,
	ListItemButton,
	ListItemText,
	Box,
	InputLabel,
	Select,
	MenuItem,
	FormControl,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { listStyle, TextCategory, selectionSteyle } from './styles';

const CategoryNavBar = ({ category }) => {
	const [value, setValue] = useState('');
	const navigate = useNavigate();

	const handleChange = (event) => {
		setValue(event.target.value);
		navigate(`${event.target.value}`);
	};

	if (category.length === 0) {
		return '';
	}
	return (
		<div>
			<List
				sx={listStyle}
				component='nav'
				aria-labelledby='nested-list-subheader'
				subheader={
					<ListSubheader component='div' id='nested-list-subheader'>
						Category
					</ListSubheader>
				}
			>
				{category.map((item) => (
					<ListItemButton key={item.id}>
						<Link to={`${item.slug}`}>
							<ListItemText
								primary={<TextCategory>{item.name}</TextCategory>}
							/>
						</Link>
					</ListItemButton>
				))}
			</List>
			<Box sx={selectionSteyle}>
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label'>Caregory</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						value={value}
						label='Caregory'
						onChange={handleChange}
					>
						{category.map((item) => (
							<MenuItem value={item.slug} key={item.id}>
								{item.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</div>
	);
};

CategoryNavBar.propTypes = {
	category: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default CategoryNavBar;
