import { useState, useEffect } from "react"

const useGetRestDetails = (id) => {
	const [restDetails, setRestDetails] = useState(null)

	const getRestDetails = async () => {
		const result = {}
		const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.08950&lng=80.27390&restaurantId=' + id + '&catalog_qa=undefined&submitAction=ENTER')
		const json = await data.json()
		result.name = json?.data?.cards?.[0]?.card?.card?.text
		const itemCategory = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(obj => obj?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
		result.itemCategory = itemCategory
		setRestDetails(result)
	}

	useEffect(() => {
		getRestDetails()
	}, [])

	return restDetails
}

export default useGetRestDetails