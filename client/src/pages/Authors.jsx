import React, {  useEffect } from 'react'
import {  useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'

const _Authors = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setPageName('authors'))
	})

	return (
		<div>
			<h1>Authors</h1>
		</div>
	)
}
export const Authors = _Authors
