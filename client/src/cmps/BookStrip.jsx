import React, { useState, useEffect } from 'react'

export function BookStrip({ book }) {

	const [editMode, setEditMode] = useState(false);


	if (!book) { return <h1>loading</h1> }


	const toggleEdit = () => {
		setEditMode(!editMode);
	}

	// let form = (
	// 	<form onSubmit={doUpdate}>
	// 	  <input name="title" type="text" onChange={event => { setFormTitle(event.target.value) }} placeholder="Title" /><br />
	// 	  <input name="subTitle" type="text" onChange={event => { setFormSubTitle(event.target.value) }} placeholder="Sub title" /><br />

	// 	  <button>Save</button>
	// 	</form>
	//   )



	return (
		(editMode ?
			<div className="table">

				<p>Edit</p>
				<p></p>

				<button onClick={toggleEdit}>Cancel</button>
			</div>
			:


			<div className="table">
				<p className="tc">{book.name}</p>
				<p className="tc">{book.author}</p>
				<button onClick={toggleEdit}>edit</button>
			</div>
		)

	)
}
