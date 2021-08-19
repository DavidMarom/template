import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { loadBooks, countBooks } from "../store/actions/bookActions";
import { BookStrip } from '../cmps/BookStrip';

const _Books = () => {
	const dispatch = useDispatch()

	const bookCount = useSelector((state) => state.book.bookCount);
	const books = useSelector((state) => state.book.books);

	const [currPage, setCurrPage] = useState(1);
	const [search, setSearch] = useState('');

	let totalPages = Math.ceil(bookCount / 4)

	const searchChange = ev => {
		setSearch(ev.target.value);
	}

	const doSearch = (ev) => {
		ev.preventDefault();
		dispatch(loadBooks(search));
	}

	useEffect(() => {
		dispatch(loadBooks('', currPage));
	}, [currPage]);
	
	
	// On mount
	useEffect(() => {
		dispatch(setPageName('books'));
		dispatch(countBooks());
	}, []);



	console.log('log:', books);

	return (

		(books ?
			<div>
				<h1>Books</h1>
				<div className="page-details">
					<p>Total books on DB: {bookCount}</p>
					<p>Total pages : {totalPages}</p>
				</div>

				<div className="table-head">
					<p className="tc">Book Name</p>
					<p className="tc">Author</p>
				</div>

				{books.map(book => <BookStrip key={book._id} book={book} />)}

				<button onClick={() => { ((currPage > 1) && setCurrPage(currPage - 1)) }}>Prev</button>
				<button onClick={() => { ((currPage <= totalPages - 1) && setCurrPage(currPage + 1)) }}>Next</button>
			</div>
			:
			<h1>Loading</h1>
		)
	)
}
export const Books = _Books
