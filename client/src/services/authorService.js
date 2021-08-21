import { httpService } from './httpService'

function count() {
	return httpService.get(`author/count`);
}

function getAuthors() {
	return httpService.get(`author/`);
}

// function getById(userId) {
//     return httpService.get(`author/${userId}`)
// }

// function remove(userId) {
//     return httpService.delete(`author/${userId}`)
// }

function update(author) {
	return httpService.put(`author/update`, author)
}


export const authorService = {
	getAuthors,
	// getById,
	// remove,
	update,
	count
};