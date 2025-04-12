import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/CartSlice'

const RestDetailsCategoryItems = (items) => {
	const dispatch = useDispatch()
	const itemsArr = []
	for (let key in items) {
		itemsArr.push({
			name: items[key]?.card?.info?.name,
			price: items[key]?.card?.info?.price,
			description: items[key]?.card?.info?.description
		})
	}

	const handleClick = (item) => {
		dispatch(addItem(item))
	}

	return (
		<div className='category-items'>
			<ul>
				{itemsArr.map(item => <li key={item.name}>
					<div>{item.name}</div><button onClick={() => handleClick(item)}>Add</button>
					<div>{item.price}</div>
					<div>{item.description}</div>
				</li>)}
			</ul>
		</div>
	)
}

export default RestDetailsCategoryItems
