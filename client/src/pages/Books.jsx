import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPageName } from '../store/actions/userActions'
import { loadBooks, countBooks } from "../store/actions/bookActions";
import { loadAuthors } from "../store/actions/authorActions";
import { BookStrip } from '../cmps/BookStrip';

const _Books = () => {
	const dispatch = useDispatch()
	const [refresh, setRefresh] = useState(0)

	const bookCount = useSelector((state) => state.book.bookCount);
	const books = useSelector((state) => state.book.books);

	const [currPage, setCurrPage] = useState(1);
	// const [search, setSearch] = useState('');


	let totalPages = Math.ceil(bookCount / 4)

	// const searchChange = ev => {
	// 	setSearch(ev.target.value);
	// }

	// const doSearch = (ev) => {
	// 	ev.preventDefault();
	// 	dispatch(loadBooks(search));
	// }

	const doRefresh = () => {
		setRefresh(refresh+1)
		dispatch(loadBooks('', currPage));
	}

	useEffect(() => {
		dispatch(loadBooks('', currPage));
		dispatch(loadAuthors());

	}, [currPage, refresh]);


	// On mount
	useEffect(() => {
		dispatch(setPageName('books'));
		dispatch(countBooks());
	}, []);

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
					<p className="tc">ID</p>
					<p className="tc"></p>
					<p className="tc"></p>
					<p></p>
					<p></p>
				</div>

				{books.map(book => <BookStrip key={book._id} book={book} doRefresh={doRefresh} />)}

				<button onClick={() => { ((currPage > 1) && setCurrPage(currPage - 1)) }}>Prev</button>
				<button onClick={() => { ((currPage <= totalPages - 1) && setCurrPage(currPage + 1)) }}>Next</button>

			</div>
			:
			<h1>Loading</h1>
		)
	)
}
export const Books = _Books
