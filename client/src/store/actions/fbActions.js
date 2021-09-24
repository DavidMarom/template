import { fbService } from '../../services/fbService';

export function loadItems() {
	return async dispatch => {
		try {
			const items = await fbService.getItems();
			// console.log("in fbAction", items);
			dispatch({ type: 'GET_ITEMS', items });
		} catch (err) {
			console.log('err in loadTask', err);

		}
	};
}
