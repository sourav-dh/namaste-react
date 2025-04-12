import React, { useState } from 'react'
import RestDetailsCategoryItems from './RestDetailsCategoryItems'

const RestDetailsCaterogy = ({props}) => {
	const {title, itemCards} = props.category
	return (
		<div>
			<div onClick={() => props.setShowIndex()} className='rest-category'>
				<div>{title}</div>
				<div>⬇️</div>
			</div>
			{props.isShow && <RestDetailsCategoryItems {...itemCards} />}
		</div>
	)
}

export default RestDetailsCaterogy
