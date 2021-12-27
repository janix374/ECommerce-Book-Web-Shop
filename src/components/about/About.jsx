import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import useClipboard from 'react-use-clipboard';
import { spanText } from './styles';

const About = () => {
	const [isCopied, setCopied] = useClipboard('bookshop@bookshop.rs');
	return (
		<Box component='div'>
			<Typography variant='h2' component='h2' gutterBottom>
				About
			</Typography>
			<Typography variant='body1' component='p' mt={2}>
				At Online Book Shop we believe reading is a timeless form of
				entertainment, and that the importance of a book to help us learn and
				understand cannot be underestimated. Every day, we give people an
				opportunity to explore over 2 million books at affordable prices.
			</Typography>
			<Typography variant='body1' component='p' mt={2}>
				We believe that bookstores are essential to a healthy culture. They’re
				where authors can connect with readers, where we discover new writers,
				where children get hooked on the thrill of reading that can last a
				lifetime. They’re also anchors for our downtowns and communities.
			</Typography>
			<Typography variant='body1' component='p' mt={2}>
				With millions of titles available across all genres, including the
				latest Australian Geographic products, we have a book for every
				interest. Our buying power ensures we can offer our customers the
				ability to read more and pay less every day.
			</Typography>
			<Typography variant='body1' component='p' mt={2}>
				Our passionate team members vast knowledge and continued commitment to
				customer service has ensured an extremely strong following, allowing us
				to offer the best loyalty program in the industry, increasing the
				discount opportunities for our customers.
			</Typography>
			<Typography variant='body1' component='p' mt={2}>
				We also support anyone who advocates for books through our affiliate
				program, which pays a 10% commission on every sale, and gives a matching
				10% to independent bookstores. If you are an author, a website or
				magazine, have a bookclub, an organization that wants to recommend
				books, or even just a book-lover with an Instagram feed, you can sign up
				to be an affiliate, start your own shop, and be rewarded for your
				advocacy of books. Bookshop wants to give back to everyone who promotes
				books, authors, and independent bookstores!
			</Typography>
			<Typography variant='h4' component='h4' mt={4}>
				Do you have questions? Read the FAQ or please
				<Typography variant='h4' component='span' style={spanText}>
					{' '}
					Contact Us.
				</Typography>
			</Typography>
			<Typography variant='body1' component='p'>
				For partnerships, promotional opportunities, and advertising inquiries,
				please email us at:
				<Typography variant='body1' component='span' style={spanText}>
					{' '}
					<Button
						title='copy to clipboard'
						variant='text'
						onClick={setCopied}
						style={{ textTransform: 'none' }}
					>
						bookshop@bookshop.rs
					</Button>
				</Typography>
			</Typography>
		</Box>
	);
};

export default About;
