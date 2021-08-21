import { httpService } from './httpService'

function count() {
    return httpService.get(`book/count`);
}

function getBooks(filter, currPage) {
    return httpService.get(`book/${filter}?page=${currPage}`);
}

function getById(userId) {
    return httpService.get(`book/${userId}`)
}

function remove(userId) {
    return httpService.delete(`book/${userId}`)
}

function update(book) {
    return httpService.put(`book/update`, book)
}

function findIdxToMark(suggestions, object) {
    return suggestions.findIndex(suggest => suggest.name === object.name);
}

export const bookService = {
    getBooks,
    getById,
    remove,
    update,
    findIdxToMark,
    count
};