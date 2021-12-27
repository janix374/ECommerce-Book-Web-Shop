import React from 'react';
import { Typography, Box } from '@mui/material';
import { stylePolicy } from './styles';

const Policy = () => (
	<Box component='div' sx={stylePolicy}>
		<Typography variant='h2' component='h2'>
			Privacy Policy
		</Typography>
		<Typography variant='h6' component='h4' mt={2}>
			Collection of your personal information
		</Typography>
		<Typography variant='body1' component='p'>
			The types of personal information that we collect will depend on how you
			use our Online Store.
		</Typography>
		<Typography variant='body1' component='p' mt={2}>
			Whilst you browse our site we collect information about the pages that are
			being requested, the time and date of the request, and the browser type
			that made the request. This information is used to improve the ease of use
			of our Online Store and is in no way linked back to individual users.
		</Typography>
		<Typography variant='body1' component='p' mt={2}>
			When you use the search facility of our Online Store we collect
			information about what you were searching for. We use this information to
			evaluate ourselves in order to determine if we are providing the products
			that you may want. This information is used solely for evaluating our
			product groupings and categories and is in no way linked back to an
			individual.
		</Typography>
		<Typography variant='body1' component='p' mt={2}>
			When joining Club QBD we request information such as your name, address,
			contact phone numbers, and your email address. Some of this information is
			essential to the service provided by joining Club QBD and as such is
			mandatory, the other information is optional and as such need not be
			provided if you wish not to. This information is stored so that you are
			not required to enter it each time you make a purchase, and may be viewed
			or updated at your convenience. This information can not be viewed or
			modified by unauthorised parties.
		</Typography>
		<Typography variant='body1' component='p' mt={2}>
			When making a purchase from our Online Store we also collect credit card
			information and delivery details. This information is used to charge you
			for the products you purchase and to deliver these products to you. If you
			would prefer not to transmit credit card information we also provide a fax
			number that you can use to place your order.
		</Typography>
		<Typography variant='h6' component='h4' mt={4}>
			Use of Cookies
		</Typography>
		<Typography variant='body1' component='p'>
			Our website does not use cookies to collect your personal information.
			Cookies are only used to complete orders on our site. A cookie is a small
			file which contains a piece of text identifying your browser to our site.
			It is quite common for online shopping sites to send such a cookie, and
			its purpose is to tell us that a previous visitor to www.qbd.com.au has
			returned.
		</Typography>
		<Typography variant='h6' component='h4' mt={4}>
			Links
		</Typography>
		<Typography variant='body1' component='p'>
			This privacy policy applies solely to information collected on our website
			and may differ from the policies from other sites that you may link to
			from this site. We recommend that you read the privacy policy of any site
			that you link to from this site.
		</Typography>
		<Typography variant='h6' component='h4' mt={4}>
			Unsubscribe
		</Typography>
		<Typography variant='body1' component='p'>
			You can unsubscribe from future marketing newsletters by entering your
			email address on our Unsubscribe. If you are having trouble using this
			page please contact our helpful Online Store staff who will assist you.
		</Typography>
		<Typography variant='h6' component='h4' mt={4}>
			Disclosure of information
		</Typography>
		<Typography variant='body1' component='p'>
			The information we collect from you is collected in the strictest
			confidence for the exclusive use of QBD Books. We will not sell or share
			personal information with any third parties.
		</Typography>
		<Typography variant='h6' component='h4' mt={2}>
			Google Trusted Merchant Program
		</Typography>
		<Typography variant='body1' component='p'>
			QBD the Bookshop has applied to become a Google Trusted merchant. During
			the qualification period Google may place a cookie onto your browser while
			shopping at QBD Books and ask you if you want to provide feedback on your
			experience via an email survey once your order has shipped. Participation
			in this survey is completely optional. As stated above, cookies are only
			used to complete orders on our site and no personal information is
			collected.
		</Typography>
	</Box>
);

export default Policy;
