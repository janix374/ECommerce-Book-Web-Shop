import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import forSlider from '../../../lib/slider';
import {
	slidesContainer,
	sliderCarousel,
	SlideComponent,
	sliderSale,
} from './styles';
import sale from '../../../assets/images/sale.jpg';

const SliderComponent = () => {
	const [images, setImages] = useState(forSlider);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const lastIndex = images.length - 1;
		if (activeIndex < 0) {
			setActiveIndex(lastIndex);
		}
		if (activeIndex > lastIndex) {
			setActiveIndex(0);
		}
	}, [activeIndex, images]);

	useEffect(() => {
		const slider = setInterval(() => {
			setActiveIndex(activeIndex + 1);
		}, 15000);
		return () => {
			clearInterval(slider);
		};
	}, [activeIndex]);

	return (
		<Box sx={slidesContainer}>
			<Box sx={sliderCarousel}>
				{images.map((item, index) => {
					const { id, pics, title } = images;
					let position = 'nextSlide';
					if (index === activeIndex) {
						position = 'activeSlide';
					}
					if (
						index === activeIndex - 1 ||
						(activeIndex === 0 && index === images.length - 1)
					) {
						position = 'lastSlide';
					}
					return (
						<SlideComponent key={item.id} className={position}>
							<img src={`${item.pics}`} alt={`${item.title}`} />
						</SlideComponent>
					);
				})}
			</Box>
			<Box sx={sliderSale}>
				<img src={`${sale}`} alt='Santa Claus' />
			</Box>
		</Box>
	);
};

export default SliderComponent;
