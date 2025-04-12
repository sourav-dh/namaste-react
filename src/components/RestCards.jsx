const RestCards = ({image, name, cuisines, rating, area}) => {
	return (
		<div className="rest-card">
			<img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' + image} alt={name}/>
			<div className="rest-card-details">
				<div className="rest-name">{name}</div>
				<div className="rest-rating">{rating}</div>
				<div className="rest-cuisines">{cuisines}</div>
				<div className="rest-area">{area}</div>
			</div>
		</div>
	)
}

export default RestCards