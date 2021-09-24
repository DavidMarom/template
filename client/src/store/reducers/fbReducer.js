const initialState = {
	items: []
}

export function fb(state = initialState, action = {}) {
	switch (action.type) {


		case 'GET_ITEMS':
			return { ...state, items: action.items };


		default:
			return state
	}
}