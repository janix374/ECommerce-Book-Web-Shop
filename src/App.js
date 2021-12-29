import { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@mui/material';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ReactNotification, { store } from 'react-notifications-component';
import { commerce } from './lib/commerce';
import {
	Cart,
	ProductDetails,
	NavBar,
	Products,
	Checkout,
	Home,
	ProductsByCategory,
	Footer,
	About,
	Policy,
	NoProducts,
	ScrollToTop,
	NotFound,
} from './components/index';
import 'react-notifications-component/dist/theme.css';

function App() {
	const [cart, setCart] = useState({});
	const [category, setCategory] = useState([]);

	const fetchategory = async () => {
		const { data } = await commerce.categories.list();
		setCategory(data);
	};

	const fetchCart = async () => {
		try {
			const fetchcart = await commerce.cart.retrieve();
			setCart(fetchcart);
		} catch (error) {
			console.log(error);
		}
	};

	const handleAddCart = async (productId, quantity) => {
		try {
			const response = await commerce.cart.add(productId, quantity);
			setCart(response.cart);
			store.addNotification({
				message: 'add new book to cart',
				type: 'success',
				insert: 'top',
				container: 'top-right',
				animationIn: ['animate__animated', 'animate__fadeIn'],
				animationOut: ['animate__animated', 'animate__fadeOut'],
				dismiss: {
					duration: 500,
					onScreen: true,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdateCartQty = async (productId, quantity) => {
		try {
			const response = await commerce.cart.update(productId, { quantity });
			setCart(response.cart);
		} catch (error) {
			console.log(error);
		}
	};

	const handleRemoveFromCart = async (productId) => {
		try {
			const response = await commerce.cart.remove(productId);
			setCart(response.cart);
		} catch (error) {
			console.log(error);
		}
	};

	const handleEmptyCart = async () => {
		try {
			const response = await commerce.cart.empty();
			setCart(response.cart);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchCart();
		fetchategory();
	}, []);

	return (
		<Router>
			<div>
				<CssBaseline />
				<ScrollToTop />
				<NavBar totalItems={cart.total_items} />
				<Container className='container'>
					<ReactNotification />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='policy' element={<Policy />} />
						<Route
							path='products'
							element={<Products category={category} title='products' />}
						>
							<Route path='' element={<NoProducts />} />
							<Route
								path='mystery'
								element={
									<ProductsByCategory
										onAddToCart={handleAddCart}
										title='Detective and Mystery'
										path='mystery'
									/>
								}
							/>
							<Route
								path='fantasy'
								element={
									<ProductsByCategory
										onAddToCart={handleAddCart}
										title='Fantasy and Fiction'
										path='fantasy'
									/>
								}
							/>
							<Route
								path='historical'
								element={
									<ProductsByCategory
										onAddToCart={handleAddCart}
										title='Historical'
										path='historical'
									/>
								}
							/>
							<Route
								path='horror'
								element={
									<ProductsByCategory
										onAddToCart={handleAddCart}
										title='Horror'
										path='horror'
									/>
								}
							/>
							<Route
								path='romance'
								element={
									<ProductsByCategory
										onAddToCart={handleAddCart}
										title='Romance'
										path='romance'
									/>
								}
							/>
							<Route
								path='biographies'
								element={
									<ProductsByCategory
										onAddToCart={handleAddCart}
										title='Biographies'
										path='biographies'
									/>
								}
							/>
							<Route
								path='cookbooks'
								element={
									<ProductsByCategory
										onAddToCart={handleAddCart}
										title='Cookbooks'
										path='cookbooks'
									/>
								}
							/>
						</Route>
						<Route
							path='product/:id'
							element={<ProductDetails onAddToCart={handleAddCart} />}
						/>
						<Route
							path='cart'
							element={
								<Cart
									cart={cart}
									handleUpdateCartQty={handleUpdateCartQty}
									handleRemoveFromCart={handleRemoveFromCart}
									handleEmptyCart={handleEmptyCart}
								/>
							}
						/>
						<Route path='checkout' element={<Checkout cart={cart} />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Container>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
