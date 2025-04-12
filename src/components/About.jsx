import React, {useContext, useEffect} from 'react'
import UserContext from '../utils/UserContext'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../utils/userSlice'

const About = () => {
	const {loggedInUser} = useContext(UserContext)
	const {isLoading, isError, data} = useSelector(store => store.user)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getUser())
	}, [])

	return (
		<>
		<h2>About Us</h2>
		<h4>Logged In User : {loggedInUser}</h4>
		<p>This is a big module and plenty of components present in this page. the bundle size is bigger</p>
		<h4>User Lists : </h4>
		{
			isLoading ? <h2>Loading User...</h2> : (
				<ul>
				{data.length > 0 && data.map(obj => <li key={obj.id}>({obj.id}) {obj.name}</li>)}
			</ul>
			)
		}
		</>
	)
}

export default About
