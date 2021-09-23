import { fbdb } from './firebase'



async function getItems() {
	return await fbdb.getAllDocs("col02");

}

export const fbService = {
    getItems
};