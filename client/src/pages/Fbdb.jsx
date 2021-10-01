import React, { useState, useEffect, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// Redux store
import { setPageName } from '../store/actions/userActions'
import { loadItems, addItem } from "../store/actions/fbActions";

// Comps
import { ItemStrip } from '../cmps/ItemStrip';

// Context
import { UserContext } from '../UserContext';

export const Fbdb = () => {
	// const { user, setLoggedUser } = useContext(UserContext);
	
	const dispatch = useDispatch()
	const items = useSelector((state) => state.fb.items);
	const [itemInput, setItemInput] = useState('');

	useEffect(() => {
		dispatch(loadItems());
		dispatch(setPageName('fbdb'));
	}, [])// eslint-disable-line react-hooks/exhaustive-deps

	const doAddItem = () => {
		let newObj = {
			name: itemInput
		}
		dispatch(addItem(newObj));
		setItemInput('');
	}

	return (
		<div>
			<h1>Firebase test page</h1>
			<div className="table-fb-items">
				<input className="tc" type="text" value={itemInput} onChange={ev => setItemInput(ev.target.value)}></input>
				<button onClick={doAddItem}>Add</button>
			</div>

			{items.map(item => <ItemStrip key={item.id} item={item} />)}
		</div >
	)
}