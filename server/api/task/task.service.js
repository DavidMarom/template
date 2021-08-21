const dbService = require('../../services/db.service')
// const ObjectId = require('mongodb').ObjectId

module.exports = {
	query,
	
}

async function query() {
	const collection = await dbService.getCollection('tasks');
	try {
		var tasks = await collection.find().toArray(); 
		console.log(tasks);
		return tasks;
	}

	catch (err) {
		console.log('ERROR: cannot find tasks')
		throw err;
	}
}

// function _buildCriteria(filterBy) {
// 	const criteria = {};
// 	if (filterBy.txt) {
// 		criteria.name = filterBy.txt
// 	}
// 	if (filterBy.minBalance) {
// 		criteria.balance = { $gte: +filterBy.minBalance }
// 	}
// 	return criteria;
// }


