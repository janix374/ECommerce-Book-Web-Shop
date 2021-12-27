import { styled } from '@mui/system';

const slidesContainer = {
	width: '100%',
	margin: '10px auto 50px auto',
	height: '400px',
	display: 'flex',
};

const sliderCarousel = {
	width: { xs: '0%', sm: '100%', md: '60%' },
	height: '100%',
	position: 'relative',
	textAlign: 'left',
	display: 'flex',
	overflow: 'hidden',
	img: {
		width: '100%',
	},
};

const sliderSale = {
	width: { xs: '100%', sm: '0%', md: '40%' },
	height: '100%',
	position: 'relative',
	overflow: 'hidden',
	textAlign: 'center',
	img: {
		width: '80%',
	},
};

const SlideComponent = styled('div')({
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
	opacity: '0',
	transition: 'all 0.8s linear',
	'&.activeSlide': {
		opacity: '1',
		transform: 'translateX(0)',
	},
	'&.lastSlide': {
		transform: 'translateX(-100%)',
	},
	'&.nextSlide': {
		transform: 'translateX(100%)',
	},
});

export { slidesContainer, sliderCarousel, SlideComponent, sliderSale };
