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
			fbService.delItem(id);
			dispatch({ type: 'REMOVE_ITEM', id });
		} catch (err) {
			console.log('err in deleteItem', err);

		}
	};
}

export function addItem(inData) {
	return async dispatch => {
		try {
			let newId = await fbService.addItem(inData);
			let data = { ...inData, id: newId }

			dispatch({ type: 'ADD_ITEM', data });
		} catch (err) {
			console.log('err in addItem', err);

		}
	};
}
