export const addPizzaToCart = (pizzaObj) => ({
	type: 'PIZZA_ADD_CART',
	payload: pizzaObj,
});

export const clearCart = () => ({
	type: 'CLEAR_CART',
});

export const removeCartPizza = (id) => ({
	type: 'REMOVE_PIZZA',
	payload: id,
});

export const plusCartItem = (id) => ({
	type: 'PLUS_CART_ITEM',
	payload: id,
});

export const minusCartItem = (id) => ({
	type: 'MINUS_CART_ITEM',
	payload: id,
});

