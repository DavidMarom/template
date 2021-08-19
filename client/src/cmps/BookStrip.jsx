import React, { useState } from 'react'
import { updateBook } from "../store/actions/bookActions";
import { useSelector, useDispatch } from 'react-redux'


export function BookStrip({ book, doRefresh }) {
	const dispatch = useDispatch()
	const authors = useSelector((state) => state.author.authors);

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
		doRefresh();
	};

	let form = (
		<form onSubmit={doUpdate}>
			<input name="name" type="text" onChange={event => { setFormName(event.target.value) }} placeholder={book.name} /><br />

			<label htmlFor="authors">Choose author:</label>
			<select name="author" id="authors" onChange={event => { setFormAuthor(event.target.value) }}>
				{authors.map(author =>
					<option
					key={author._id}
					value={author.last_name}
					>{author.last_name}</option>)
				}
			</select>

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
