const bookService = require('./book.service')

// http://localhost:3030/api/book/611d025a36ccc543adf98988

async function getBook(req, res) {
	console.log('█controller: getBook', req.params.id);
    const book = await bookService.getById(req.params.id)
    res.send(book)
}

async function getBooks(req, res) {
    const books = await bookService.query(req.params.filter)
    res.send(books)
}

async function countBooks(req, res) {
	console.log('02 in book count controller');
    const count = await bookService.count()
    res.send(count);
}

// http://localhost:3030/api/user/?page=1
async function getAllBooks(req, res) {
    const queryPage = req.query.page;
    const pageSize = 4;
    const books = await bookService.query2(queryPage, pageSize);
    res.send(books)
}

async function deleteBook(req, res) {
    await bookService.remove(req.params.id)
    res.end()
}

async function updateBook(req, res) {
    const book = req.body;
	console.log(book);

    await bookService.update(book)
    res.send(book)
}


module.exports = {
    getBook,
    getAllBooks,
    getBooks,
    deleteBook,
    updateBook,
    countBooks
}