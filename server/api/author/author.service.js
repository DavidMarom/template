const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
	query2,
	count,
	update
}

// async function query(filterBy) {
// 	let criteria = {};
// 	if (filterBy != 'undefined' || filterBy != '') { criteria = { name: new RegExp(".*" + filterBy + ".*", 'i') } }
// 	else { criteria = '' }
// 	const collection = await dbService.getCollection('authors');
// 	try {
// 		if (filterBy != undefined || filterBy != '') { var authors = await collection.find(criteria).toArray(); }
// 		else { var authors = await collection.find().toArray(); }
// 		// authors.forEach(user => delete user.password);
// 		return authors;
// 	}

// 	catch (err) {
// 		console.log('ERROR: cannot find authors')
// 		throw err;
// 	}
// }

async function query2() {
	const collection = await dbService.getCollection('authors');
	try {
		var authors = await collection.find().toArray();
		return authors;
	}
	catch (err) {
		console.log('ERROR: cannot find authors')
		throw err;
	}
}

async function count() {
	console.log('03 in author count service');
	const collection = await dbService.getCollection('authors');
	try {
		var number = await collection.aggregate([{ $count: "total" }]).toArray();
		return number;
	}
	catch (err) {
		console.log('ERROR: cannot count authors')
		throw err;
	}
}

// async function getById(bookId) {
// 	const collection = await dbService.getCollection('authors')
// 	try {
// 		const book = await collection.findOne({ "_id": ObjectId(bookId) })

// 		return book
// 	} catch (err) {
// 		console.log(`ERROR: while finding book ${bookId}`)
// 		throw err;
// 	}
// }

// async function getByEmail(email) {
// 	const collection = await dbService.getCollection('authors')
// 	try {
// 		const user = await collection.findOne({ email })
// 		return authors
// 	} catch (err) {
// 		console.log(`ERROR: while finding book ${email}`)
// 		throw err;
// 	}
// }

// async function remove(bookId) {
// 	const collection = await dbService.getCollection('authors')
// 	try {
// 		await collection.deleteOne({ "_id": ObjectId(bookId) })
// 	} catch (err) {
// 		console.log(`ERROR: cannot remove book ${bookId}`)
// 		throw err;
// 	}
// }

async function update(author) {
	console.log('in service update', author);
	const collection = await dbService.getCollection('authors')
	author._id = ObjectId(author._id);

	try {
		await collection.replaceOne({ "_id": author._id }, author)
		return author
	} catch (err) {
		console.log(`ERROR: cannot update author ${author._id}`)
		throw err;
	}
}



// async function add(book) {
// 	const collection = await dbService.getCollection('authors')
// 	try {
// 		await collection.insertOne(book);
// 		return book;
// 	} catch (err) {
// 		console.log(`ERROR: cannot insert book`)
// 		throw err;
// 	}
// }

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


