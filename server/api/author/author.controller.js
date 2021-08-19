const authorService = require('./author.service')

// http://localhost:3030/api/book/611d025a36ccc543adf98988

// async function getBook(req, res) {
// 	console.log('█controller: getAuthor', req.params.id);
//     const book = await authorService.getById(req.params.id)
//     res.send(book)
// }

// async function getBooks(req, res) {
//     const books = await authorService.query(req.params.filter)
//     res.send(books)
// }

async function countAuthors(req, res) {
	console.log('02 in book count controller');
	const count = await authorService.count()
	res.send(count);
}

// http://localhost:3030/api/user/?page=1
async function getAllAuthors(req, res) {
	const queryPage = req.query.page;
	const books = await authorService.query2();
	res.send(books)
}


async function updateAuthor(req, res) {
	const book = req.body;
	console.log(book);

	await authorService.update(book)
	res.send(book)
}


module.exports = {
	getAllAuthors,
	countAuthors,
	updateAuthor
}