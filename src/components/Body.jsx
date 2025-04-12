import { useState, useEffect, useContext } from "react"
import RestCards from "./RestCards"
import Shimmer from "./Shimmer"
import { Link } from "react-router"
import PromotedRestCards from "./PromotedRestCard"
import UserContext from "../utils/UserContext"

const Body = () => {
	let [restData, setRestData] = useState([])
	let [searchText, setSearchText] = useState('')
	let [filteredRestData, setfilteredRestData] = useState([])
	const {loggedInUser, setLoggedUser} = useContext(UserContext)

	const PromotedRestCard = PromotedRestCards(RestCards)

	const getRestData = async (url) => {
		const json = await fetch(url)
		const data = await json.json()
		let restArr = data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		restArr = restArr.map(obj => ({
			id: obj?.info?.id,
			image: obj?.info?.cloudinaryImageId,
			name: obj?.info?.name,
			cuisines: obj?.info?.cuisines.join(', '),
			rating: obj?.info?.avgRating,
			area: obj?.info?.areaName
		}))
		setRestData(restArr)
		setfilteredRestData(restArr)
	}

	useEffect(() => {
		const API_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.08950&lng=80.27390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
		getRestData(API_URL)
	}, [])

	const showTopRatedRest = () => {
		const filteredData = restData.filter(obj => obj.rating > 4.2)
		setfilteredRestData(filteredData)
	}

	const handleSearch = () => {
		setSearchText(event.target.value)
		const filteredData = restData.filter(obj => obj.name.toLowerCase().includes(event.target.value.toLowerCase()))
		setfilteredRestData(filteredData)
	}

	return (
		<section className="rest__section">
			<h1>Discover Restaurants : </h1>
			<div className="body__header">
				<div>
					Search Restaurant : <input type="text" value={searchText} onChange={handleSearch} />
				</div>
				<div><button onClick={showTopRatedRest} className="body__btn">Show Top rated Restaurant</button></div>
				<div>Logged in User : <input type="text" value={loggedInUser} onChange={(e) => setLoggedUser(e.target.value)} /></div>
			</div>
			<div className="rest-card-container">
				{filteredRestData.length === 0 ? <Shimmer /> : (
					filteredRestData.map(obj => <Link key={obj.id} to={'/restaurants/' + obj.id}>{
						obj.rating > 4.3 ? <PromotedRestCard {...obj} /> : <RestCards {...obj} />
					}</Link>)
				)}
			</div>
		</section>
	)
}

export default Body