import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'

export const Debounce = () => {
	const dispatch = useDispatch()

	// On mount
	useEffect(() => {
		dispatch(setPageName('debounce'));
	}, [])// eslint-disable-line react-hooks/exhaustive-deps


	return (
		<div>
			<h1>Debounce - In progress</h1>
		</div>
	)
}
