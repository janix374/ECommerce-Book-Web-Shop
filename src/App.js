import { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@material-ui/core';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { commerce } from './lib/commerce';

import Products from './components/products/Products';
import NavBar from './components/navbar/Navbar';
import Cart from './components/cart/Cart';

function App() {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});

	const fetchProducts = async () => {
		try {
			const { data } = await commerce.products.list();
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
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
	}, []);

	return (
		<Router basename='/crimenovel'>
			<div>
				<CssBaseline />
				<NavBar totalItems={cart.total_items} />
				<Container>
					<Switch>
						<Route exact path='/'>
							<Products products={products} onAddToCart={handleAddCart} />
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
							{/* <Checkout cart={cart} /> */}
						</Route>
					</Switch>
				</Container>
			</div>
		</Router>
	);
}

export default App;
