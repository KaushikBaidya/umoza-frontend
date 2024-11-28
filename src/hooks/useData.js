import { useState } from "react";
// import createPersistedState from "use-persisted-state";
// const useAuthState = createPersistedState("auth");
// const useRoleState = createPersistedState("role");
// const useMenuState = createPersistedState("menu");
// const useCartState = createPersistedState("cart");

const useData = () => {
	const [user, setUser] = useState(null);
	const [role, setRole] = useState(null);
	const [menubar, setMenubar] = useState(null);
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (currentProduct) => {
		const alreadyAdded = cartItems.find(
			(cartProduct) => cartProduct.productId === currentProduct.productId
		);
		if (alreadyAdded) {
			const newItems = cartItems.map((cartItem) => {
				return cartItem.productId === alreadyAdded.productId
					? currentProduct
					: cartItem;
			});
			setCartItems(newItems);
		} else {
			setCartItems([...cartItems, currentProduct]);
		}
	};

	const quantityIncreaseOrDecrease = (productId, quantity) => {
		const newCartItems = cartItems.map((cartItem) => {
			if (cartItem.productId === productId) {
				cartItem.quantity = quantity;
			}
			return cartItem;
		});
		setCartItems(newCartItems);
	};

	const deleteCartItem = (productId) => {
		const newCartItems = cartItems.filter(
			(item) => item.productId !== productId
		);
		setCartItems(newCartItems);
	};

	const deleteCartItems = () => {
		setCartItems([]);
	};

	const signOut = () => {
		setUser(null);
		setRole(null);
	};

	return {
		user,
		setUser,
		role,
		setRole,
		menubar,
		setMenubar,
		cartItems,
		setCartItems,
		addToCart,
		quantityIncreaseOrDecrease,
		deleteCartItem,
		deleteCartItems,
		signOut,
	};
};

export default useData;
