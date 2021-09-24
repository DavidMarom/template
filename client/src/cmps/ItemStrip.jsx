import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from "../store/actions/fbActions";

export const ItemStrip = ({ item }) => {
	const dispatch = useDispatch()


	const handleDelete = () => {
		console.log("delete", item.id);

		dispatch(deleteItem(item.id));


	}


	return (
		<div >


			<div className="table-fb-items">

				<p className="tc">{item.name}</p>

				<p className="tc">-</p>
				<p className="tc">-</p>
				<p className="tc-small">{item.id}</p>
				<p className="tc">-</p>
				<button className="btn" onClick={handleDelete}><i className="fas fa-trash-alt"></i></button>
				<p></p>
			</div>

		</div>
	)
}
