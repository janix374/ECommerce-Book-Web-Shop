import { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactNotification, { store } from 'react-notifications-component';
import { commerce } from './lib/commerce';
import {
	// Cart,
	// ProductDetails,
	NavBar,
	Products,
	// Checkout,
	Home,
	PdoductsByCategory,
	Footer,
	About,
	Policy,
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

	// <Router basename='/crimenovel'>
	return (
		<Router>
			<div>
				<CssBaseline />
				<NavBar totalItems={cart.total_items} />
				<Container className='container'>
					{/* <ReactNotification /> */}
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='policy' element={<Policy />} />
						<Route
							path='products'
							element={
								<Products
									onAddToCart={handleAddCart}
									category={category}
									title='products'
								/>
							}
						>
							<Route
								path='mystery'
								element={<PdoductsByCategory title='mystery' path='mystery' />}
							/>
							<Route
								path='fantasy'
								element={
									<PdoductsByCategory
										title='Fantasy and Fiction'
										path='fantasy'
									/>
								}
							/>
							<Route
								path='historical'
								element={
									<PdoductsByCategory title='historical' path='historical' />
								}
							/>
							<Route
								path='horror'
								element={<PdoductsByCategory title='horror' path='horror' />}
							/>
							<Route
								path='romance'
								element={<PdoductsByCategory title='romance' path='romance' />}
							/>
							<Route
								path='sf'
								element={<PdoductsByCategory title='sf' path='sf' />}
							/>
							<Route
								path='biographies'
								element={
									<PdoductsByCategory title='biographies' path='biographies' />
								}
							/>
							<Route
								path='cookbooks'
								element={
									<PdoductsByCategory title='cookbooks' path='cookbooks' />
								}
							/>
						</Route>
						{/* <Route expect path='/products/:id'>
							<ProductDetails onAddToCart={handleAddCart} />
						</Route>
						<Route exact path='/cart'>
							<Cart
								cart={cart}
								handleUpdateCartQty={handleUpdateCartQty}
								handleRemoveFromCart={handleRemoveFromCart}
								handleEmptyCart={handleEmptyCart}
							/>
						</Route>
						<Route expect path='/checkout'>
							<Checkout cart={cart} />
						</Route> */}
					</Routes>
				</Container>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

/* <Route
								path='/fantasy'
								element={
									<Products
										products={products}
										onAddToCart={handleAddCart}
										title='fantasy'
									/>
								}
							/> */
/* <Route path='/crime' element={<Products products={products} onAddToCart={handleAddCart} />}> */
