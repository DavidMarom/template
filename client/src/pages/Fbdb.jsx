import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { loadItems } from "../store/actions/fbActions";


export const Fbdb = () => {
	const dispatch = useDispatch()
	const tasks = useSelector((state) => state.task.tasks);

	useEffect(() => {
		dispatch(loadItems());

		dispatch(setPageName('fbdb'));
		console.log(tasks);
	}, []);
	
	return (
		<div>
			<h1>Firebase test page</h1>
		</div>
	)
}
