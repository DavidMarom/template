import React, { useState, useEffect } from 'react'
import { updateAuthor } from "../store/actions/authorActions";
import { useSelector, useDispatch } from 'react-redux'


export function AuthorStrip({ author, doRefresh }) {
	const dispatch = useDispatch()

	const [formName, setFormName] = useState(author.first_name);
	const [editMode, setEditMode] = useState(false);

	if (!author) { return <h1>loading</h1> }

	const toggleEdit = () => {
		setEditMode(!editMode);
	}

	const doUpdate = async ev => {
		ev.preventDefault();
		const newAuthor = {
			first_name: formName,
			_id: author._id
		};
		dispatch(updateAuthor(newAuthor));
		toggleEdit();
		console.log('update triggered');
		doRefresh();
	};

	let form = (
		<form onSubmit={doUpdate}>
			<input name="name" type="text" onChange={event => { setFormName(event.target.value) }} placeholder={author.first_name} /><br />

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
				<p className="tc">{author.first_name}</p>
				<button onClick={toggleEdit}>Edit</button>
			</div>
		)
	)
}
