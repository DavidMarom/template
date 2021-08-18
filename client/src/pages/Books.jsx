import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'

const _Books = () => {
	const dispatch = useDispatch()


	useEffect(() => {
		dispatch(setPageName('books'))
	})

	return (
		<div>
			<h1>Books</h1>
		</div>
	)
}
export const Books = _Books
