const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
	query,
	query2,
	getById,
	getByEmail,
	remove,
	update,
	add,
	count
}

async function query(filterBy) {
	let criteria = {};
	if (filterBy != 'undefined' || filterBy != '') { criteria = { name: new RegExp(".*" + filterBy + ".*", 'i') } }
	else { criteria = '' }
	const collection = await dbService.getCollection('books');
	try {
		if (filterBy != undefined || filterBy != '') { var books = await collection.find(criteria).toArray(); }
		else { var books = await collection.find().toArray(); }
		// books.forEach(user => delete user.password);
		return books;
	}

	catch (err) {
		console.log('ERROR: cannot find books')
		throw err;
	}
}

async function query2(queryPage, pageSize) {
	const collection = await dbService.getCollection('books');
	try {
		var books = await collection.find().skip((queryPage - 1) * pageSize).limit(pageSize).toArray();
		// books.forEach(user => delete user.password);

		return books;
	}
	catch (err) {
		console.log('ERROR: cannot find books')
		throw err;
	}
}
async function count() {
	console.log('03 in count service');
	const collection = await dbService.getCollection('books');
	try {
		var number = await collection.aggregate([{ $count: "total" }]).toArray();
		return number;
	}
	catch (err) {
		console.log('ERROR: cannot count books')
		throw err;
	}
}

async function getById(bookId) {
	const collection = await dbService.getCollection('books')
	try {
		const book = await collection.findOne({ "_id": ObjectId(bookId) })

		return book
	} catch (err) {
		console.log(`ERROR: while finding book ${bookId}`)
		throw err;
	}
}

async function getByEmail(email) {
	const collection = await dbService.getCollection('books')
	try {
		const user = await collection.findOne({ email })
		return books
	} catch (err) {
		console.log(`ERROR: while finding book ${email}`)
		throw err;
	}
}

async function remove(bookId) {
	const collection = await dbService.getCollection('books')
	try {
		await collection.deleteOne({ "_id": ObjectId(bookId) })
	} catch (err) {
		console.log(`ERROR: cannot remove book ${bookId}`)
		throw err;
	}
}

async function update(book) {
	console.log('in service update', book);
	const collection = await dbService.getCollection('books')
	book._id = ObjectId(book._id);

	try {
		await collection.replaceOne({ "_id": book._id }, book)
		return book
	} catch (err) {
		console.log(`ERROR: cannot update user ${book._id}`)
		throw err;
	}
}



async function add(book) {
	const collection = await dbService.getCollection('books')
	try {
		await collection.insertOne(book);
		return book;
	} catch (err) {
		console.log(`ERROR: cannot insert book`)
		throw err;
	}
}

function _buildCriteria(filterBy) {
	const criteria = {};
	if (filterBy.txt) {
		criteria.name = filterBy.txt
	}
	if (filterBy.minBalance) {
		criteria.balance = { $gte: +filterBy.minBalance }
	}
	return criteria;
}


