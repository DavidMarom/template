import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'

export function TaskStrip({ task }) {
	// const dispatch = useDispatch()
	// const authors = useSelector((state) => state.author.authors);

	// const [formName, setFormName] = useState(book.title);
	// const [formAuthor, setFormAuthor] = useState(book.author);
	const [editMode, setEditMode] = useState(false);

	if (!task) { return <h1>loading</h1> }

	const toggleEdit = () => {
		setEditMode(!editMode);
	}

	// let form = (
	// 	<form onSubmit={doUpdate}>
	// 		<input name="name" type="text" onChange={event => { setFormName(event.target.value) }} placeholder={book.name} /><br />

	// 		<label htmlFor="authors">Choose author:</label>
	// 		<select name="author" id="authors" onChange={event => { setFormAuthor(event.target.value) }}>
	// 			{authors.map(author =>
	// 				<option
	// 				key={author._id}
	// 				value={author.last_name}
	// 				>{author.last_name}</option>)
	// 			}
	// 		</select>

	// 		<button>Save</button>
	// 	</form>
	// )

	return (
		(editMode ?
			<div className="table">
				<p>edit</p>
				<button onClick={toggleEdit}>Cancel</button>
			</div>
			:
			<div className="table">
				<p className="tc">{task.title}</p>
				<p className="tc">{task.status}</p>
				{/* <button onClick={toggleEdit}>Edit</button> */}
			</div>
		)
	)
}
