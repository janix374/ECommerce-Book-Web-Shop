import backcrime from '../assets/images/backcrime.jpg';
import frontcrime from '../assets/images/frontcrime.png';
import backfantasy from '../assets/images/backfantasy.jpg';
import frontfantasy from '../assets/images/frontfantasy.png';
import backhistorical from '../assets/images/backhistorical.jpg';
import fronthorror from '../assets/images/fronthorror.png';
import backhorror from '../assets/images/backhorror.jpg';
import frontromance from '../assets/images/frontromance.png';
import backromance from '../assets/images/backromance.jpg';
import backbio from '../assets/images/backbio.jpg';
import backcookbooks from '../assets/images/backcookbooks.jpg';

const homeCategory = [
	{
		id: 1,
		styleComponen: {
			left: '100px',
			bottom: '50px',
		},
		backgroundimg: backcrime,
		frontimg: frontcrime,
		title: 'Detective and Mystery',
		path: 'mystery',
	},
	{
		id: 2,
		styleComponen: {
			left: '35px',
			bottom: '-5px',
		},
		backgroundimg: backfantasy,
		frontimg: frontfantasy,
		title: 'Fantasy and Fiction',
		path: 'fantasy',
	},
	{
		id: 3,
		styleComponen: {
			top: '0px',
		},
		backgroundimg: backhistorical,
		frontimg: '',
		title: 'Historical',
		path: 'historical',
	},
	{
		id: 4,
		styleComponen: {
			left: '45px',
			bottom: '13px',
		},
		backgroundimg: backhorror,
		frontimg: fronthorror,
		title: 'Horror',
		path: 'horror',
	},
	{
		id: 5,
		styleComponen: {
			left: '71px',
			top: '52px',
		},
		backgroundimg: backromance,
		frontimg: frontromance,
		title: 'Romance',
		path: 'romance',
	},
	{
		id: 6,
		styleComponen: {
			top: '0px',
		},
		backgroundimg: backbio,
		frontimg: '',
		title: 'Biographies',
		path: 'biographies',
	},
	{
		id: 7,
		styleComponen: {
			top: '0px',
		},
		backgroundimg: backcookbooks,
		frontimg: '',
		title: 'Cookbooks',
		path: 'cookbooks',
	},
];

export default homeCategory;
