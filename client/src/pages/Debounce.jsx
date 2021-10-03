import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { DebounceInput } from 'react-debounce-input';

export const Debounce = () => {
	const dispatch = useDispatch()
	const [state, setState] = useState('');

	// On mount
	useEffect(() => {
		dispatch(setPageName('debounce'));
	}, [])// eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div>
			<h1>Debounce</h1>
			<div className="h-space"></div>

			<DebounceInput minLength={2} debounceTimeout={1000} onChange={event => setState(event.target.value)} />
			<div className="h-space"></div>
			<p>Value: {state}</p>
		</div>
	)
}
