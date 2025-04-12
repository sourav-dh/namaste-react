import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
	const {status, statusText} = useRouteError()
	return (
		<>
		<h2>Opps! An erroor occoured</h2>
		<p>{status} : {statusText}</p>
		</>
	)
}

export default Error
