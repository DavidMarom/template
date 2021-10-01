import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'

export const Validation = () => {
	const dispatch = useDispatch()

	// On mount
	useEffect(() => {
		dispatch(setPageName('validation'));
	}, [])// eslint-disable-line react-hooks/exhaustive-deps


	return (
		<div>
			<h1>Validation - In progress</h1>
		</div>
	)
}