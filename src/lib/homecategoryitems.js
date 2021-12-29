import backcrime from '../assets/images/backcrime.jpg';
import frontcrime from '../assets/images/frontcrime.png';
import backfantasy from '../assets/images/backfantasy.jpg';
import frontfantasy from '../assets/images/frontfantasy.png';
import backhistorical from '../assets/images/backhistorical.jpg';
import fronthistory from '../assets/images/fronthistory.png';
import fronthorror from '../assets/images/fronthorror.png';
import backhorror from '../assets/images/backhorror.jpg';
import frontromance from '../assets/images/frontromance.png';
import backromance from '../assets/images/backromance.jpg';
import backbio from '../assets/images/backbio.jpg';
import backcookbooks from '../assets/images/backcookbooks.jpg';
import froncookbook from '../assets/images/froncookbook.png';
import frontbiography from '../assets/images/frontbiography.png';

const homeCategory = [
	{
		id: 1,
		styleComponen: {
			left: '12px',
			bottom: '-5px',
		},
		backgroundimg: backcrime,
		frontimg: frontcrime,
		title: 'Detective and Mystery',
		path: 'mystery',
	},
	{
		id: 2,
		styleComponen: {
			right: '18px',
			top: '118px',
		},
		backgroundimg: backfantasy,
		frontimg: frontfantasy,
		title: 'Fantasy and Fiction',
		path: 'fantasy',
	},
	{
		id: 3,
		styleComponen: {
			top: '33px',
			left: '7px',
		},
		backgroundimg: backhistorical,
		frontimg: fronthistory,
		title: 'Historical',
		path: 'historical',
	},
	{
		id: 4,
		styleComponen: {
			right: '10px',
			top: '140px',
		},
		backgroundimg: backhorror,
		frontimg: fronthorror,
		title: 'Horror',
		path: 'horror',
	},
	{
		id: 5,
		styleComponen: {
			left: '40px',
			bottom: '8px',
		},
		backgroundimg: backromance,
		frontimg: frontromance,
		title: 'Romance',
		path: 'romance',
	},
	{
		id: 6,
		styleComponen: {
			bottom: '10px',
			right: '8px',
		},
		backgroundimg: backbio,
		frontimg: frontbiography,
		title: 'Biographies',
		path: 'biographies',
	},
	{
		id: 7,
		styleComponen: {
			bottom: '37px',
			left: '20px',
		},
		backgroundimg: backcookbooks,
		frontimg: froncookbook,
		title: 'Cookbooks',
		path: 'cookbooks',
	},
];

export default homeCategory;
