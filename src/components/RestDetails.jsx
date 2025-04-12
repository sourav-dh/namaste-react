import { useParams } from "react-router"
import useGetRestDetails from "../utils/usegetRestDetails"
import RestDetailsCaterogy from "./RestDetailsCaterogy"
import { useState } from "react"

const RestDetails = () => {
	const {id} = useParams()
	const restDetails = useGetRestDetails(id)
	const [showIndex, setShowIndex] = useState(1)
	
	return restDetails ? (
		<>
			<h2>{restDetails.name}</h2>
			<div className="rest-accordian-parent">
				{restDetails.itemCategory.map((category, key) => <RestDetailsCaterogy key={key} props = {{
					category: category?.card?.card,
					isShow: showIndex === key,
					setShowIndex: () => showIndex === key ? setShowIndex(null) : setShowIndex(key)
					}} />)}
			</div>
		</>
	) : <h2>Loading...</h2>
}

export default RestDetails