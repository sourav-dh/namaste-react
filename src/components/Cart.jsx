import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearItem } from '../utils/cartSlice'

const Cart = () => {
	const cartItems = useSelector(store => store.cart.items)
	const dispatch = useDispatch()
	const clearCart = () => {
		dispatch(clearItem())
	}
	return (
		<div className='category-items'>
			<button onClick={clearCart}>Clear Cart</button>
			{cartItems.length === 0 ? <div>No Items in the cart</div> : (
				<ul>
				{cartItems.map(item => <li key={item.name}>
					<div>{item.name}</div><button>Remove</button>
					<div>{item.price}</div>
					<div>{item.description}</div>
				</li>)}
			</ul>
			)}
		</div>
	)
}

export default Cart
