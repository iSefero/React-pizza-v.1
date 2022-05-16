import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';

function App() {
	return (
		<div className="wrapper">
			<Header />
			<div className="content"></div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
