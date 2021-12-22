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
} from './components/index';
import 'react-notifications-component/dist/theme.css';

function App() {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});
	const [category, setCategory] = useState([]);

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();
		setProducts(data);
	};

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
		fetchProducts();
		fetchCart();
		fetchategory();
	}, []);

	console.log(category);
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
						<Route
							path='products'
							element={
								<Products
									products={products}
									onAddToCart={handleAddCart}
									category={category}
									title='products'
								/>
							}
						>
							<Route
								path='mystery'
								element={<PdoductsByCategory title='mystery' />}
							/>
							<Route
								path='fantasy'
								element={<PdoductsByCategory title='fantasy' />}
							/>
							<Route
								path='historical'
								element={<PdoductsByCategory title='historical' />}
							/>
							<Route
								path='horror'
								element={<PdoductsByCategory title='horror' />}
							/>
							<Route
								path='romance'
								element={<PdoductsByCategory title='romance' />}
							/>
							<Route path='sf' element={<PdoductsByCategory title='sf' />} />
							<Route
								path='biographies'
								element={<PdoductsByCategory title='biographies' />}
							/>
							<Route
								path='cookbooks'
								element={<PdoductsByCategory title='cookbooks' />}
							/>
							{/* <Route
								path='/fantasy'
								element={
									<Products
										products={products}
										onAddToCart={handleAddCart}
										title='fantasy'
									/>
								}
							/> */}
							{/* <Route path='/crime' element={<Products products={products} onAddToCart={handleAddCart} />}> */}
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
			</div>
		</Router>
	);
}

export default App;
