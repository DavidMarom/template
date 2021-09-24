import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { loadAuthors, countAuthors } from "../store/actions/authorActions";
import { AuthorStrip } from '../cmps/AuthorStrip';

const _Authors = () => {
	const dispatch = useDispatch()
	const [refresh, setRefresh] = useState(0)

	const authorCount = useSelector((state) => state.author.authorCount);
	const authors = useSelector((state) => state.author.authors);

	const [currPage, setCurrPage] = useState(1);
	// const [search, setSearch] = useState('');

	let totalPages = Math.ceil(authorCount / 4)


	const doRefresh = () => {
		setRefresh(refresh + 1)
		dispatch(loadAuthors());
	}

	useEffect(() => {
		dispatch(loadAuthors());
	}, [currPage, refresh, dispatch]);


	// On mount
	useEffect(() => {
		dispatch(setPageName('authors')); 
		dispatch(countAuthors()); 
	}, [])// eslint-disable-line react-hooks/exhaustive-deps


	return (

		(authors ?
			<div>
				<h1>Authors</h1>
				<div className="page-details">
					<p>Total authors on DB: {authorCount}</p>
					<p>Total pages : {totalPages}</p>
				</div>

				<div className="table-head">
					<p className="tc">First Name</p>
					<p className="tc">Last Name</p>
					<p className="tc"></p>
				</div>

				{authors.map(author => <AuthorStrip key={author._id} author={author} doRefresh={doRefresh} />)}

				<button onClick={() => { ((currPage > 1) && setCurrPage(currPage - 1)) }}>Prev</button>
				<button onClick={() => { ((currPage <= totalPages - 1) && setCurrPage(currPage + 1)) }}>Next</button>
			</div>
			:
			<h1>Loading</h1>
		)
	)
}
export const Authors = _Authors
