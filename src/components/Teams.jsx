import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTodo } from '../utils/todoSlice'

const Teams = () => {
	const {isLoading, data, isError} = useSelector(store => store.todo)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTodo())
	}, [])

	console.log(isLoading, data, isError)
	return isError ? <h2>API Error : fetching data</h2> : (isLoading ? <h1>Loading</h1> : (
		<ul>
			{data.length > 0 && data.map(obj => <li key={obj.id}>{obj.title}</li>)}
		</ul>
	))
}

export default Teams
