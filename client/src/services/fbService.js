import { fbdb } from './firebase'

async function getItems() {
	return await fbdb.getAllDocs("col02");
}

async function delItem(id) {
	fbdb.RemoveDoc("col02",id);
	return id;
}

async function addItem(data) {
	
	return await fbdb.addToDB("col02",data);
}

export const fbService = {
    getItems,
	delItem,
	addItem
};