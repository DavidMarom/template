import { fbService } from '../../services/fbService';

export function loadItems() {
	return async dispatch => {
		try {
			const items = await fbService.getItems();
			dispatch({ type: 'GET_ITEMS', items });
		} catch (err) {
			console.log('err in loadItems', err);

		}
	};
}

export function deleteItem(id) {
	return async dispatch => {
		try {
			console.log("deleting:",id);
			fbService.delItem(id);
			dispatch({ type: 'REMOVE_ITEM', id });
		} catch (err) {
			console.log('err in loadItems', err);

		}
	};
}
