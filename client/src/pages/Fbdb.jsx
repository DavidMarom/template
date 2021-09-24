import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { loadItems } from "../store/actions/fbActions";
import { ItemStrip } from '../cmps/ItemStrip';


export const Fbdb = () => {
	const dispatch = useDispatch()
	const items = useSelector((state) => state.fb.items);

	useEffect(() => {
		dispatch(loadItems());
		dispatch(setPageName('fbdb'));
		console.log("Items:", items);
	}, []);

	return (
		<div>
			<h1>Firebase test page</h1>
			{items.map(item => <ItemStrip key={item.id} item={item} />)}
		</div>
	)
}
