import { fbdb } from './firebase'

async function getItems() {
	return await fbdb.getAllDocs("col02");
}

async function delItem(id) {
	
	fbdb.RemoveDoc("col02",id);
	return id;

}

export const fbService = {
    getItems,
	delItem
};