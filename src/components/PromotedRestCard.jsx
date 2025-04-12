const PromotedRestCards = (RestCards) => {
	return (props) => (
		<div>
			<label>Promoted</label>
			<RestCards {...props} />
		</div>
	)
}

export default PromotedRestCards