import { fbService } from '../../services/fbService';

export function loadItems() {
	return async dispatch => {
		try {
			const tasks = await fbService.getItems();
			dispatch({ type: 'GET_TASKS', tasks });
		} catch (err) {
			console.log('err in loadTask', err);

		}
	};
}
