const Shimmer = () => {
	const shimmerCardsArr = []
	for (let i = 1; i <= 8; i++) {
		shimmerCardsArr.push(<div key={i} className="rest-card rest-card-shimmer"></div>)
	}
	return (
		<>
		{shimmerCardsArr}
		</>
	)
}

export default Shimmer