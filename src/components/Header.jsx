import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useContext } from "react"
import { useSelector } from "react-redux"

const Header = () => {
	const onlineStatus = useOnlineStatus()

	const {loggedInUser} = useContext(UserContext)

	const cartItems = useSelector(store => store.cart.items)

	return (
		<header>
			<div className="header__image">
				<img alt="Header Image" src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg" />
			</div>
			<ul className="header__menu">
				<li>Online Status : {onlineStatus ? '✅' : '🔴'}</li>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About Us</Link></li>
				<li><Link to="/teams">Teams</Link></li>
				<li><button>Login</button></li>
				<li>User : {loggedInUser}</li>
				<li><Link to="/cart">Cart ({cartItems.length} Items)</Link></li>
			</ul>
		</header>
	)
}

export default Header