import React, { useState, useEffect } from 'react'
import { updateBook } from "../store/actions/bookActions";
import { useSelector, useDispatch } from 'react-redux'


export function BookStrip({ book, doRefresh }) {
	const dispatch = useDispatch()

	const [formName, setFormName] = useState(book.name);
	const [formAuthor, setFormAuthor] = useState(book.author);
	const [editMode, setEditMode] = useState(false);

	if (!book) { return <h1>loading</h1> }

	const toggleEdit = () => {
		setEditMode(!editMode);
	}

	const doUpdate = async ev => {
		ev.preventDefault();
		const newBook = {
			name: formName,
			author: formAuthor,
			_id: book._id
		};
		dispatch(updateBook(newBook));
		toggleEdit();
		console.log('update triggered');
		doRefresh();
	};

	let form = (
		<form onSubmit={doUpdate}>
			<input name="name" type="text" onChange={event => { setFormName(event.target.value) }} placeholder={book.name} /><br />
			<input name="author" type="text" onChange={event => { setFormAuthor(event.target.value) }} placeholder={book.author} /><br />

			<button>Save</button>
		</form>
	)

	return (
		(editMode ?
			<div className="table">
				{form}
				<button onClick={toggleEdit}>Cancel</button>
			</div>
			:
			<div className="table">
				<p className="tc">{book.name}</p>
				<p className="tc">{book.author}</p>
				<button onClick={toggleEdit}>Edit</button>
			</div>
		)
	)
}
