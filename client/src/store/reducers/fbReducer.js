const initialState = {
	items: [],
	user: null
}

export function fb(state = initialState, action = {}) {
	switch (action.type) {


		case 'GET_ITEMS':
			return { ...state, items: action.items };

		case 'REMOVE_ITEM':
			return { ...state, items: state.items.filter(item => item.id !== action.id) };

		case 'ADD_ITEM':
			return { ...state, items: [...state.items, action.data] };

		case 'SET_USER':
			return { ...state, user: action.user };
		
		case 'REMOVE_USER':
			return { ...state, user: null };



		default:
			return state
	}
}