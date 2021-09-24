const initialState = {
	items: []
}

export function fb(state = initialState, action = {}) {
	switch (action.type) {


		case 'GET_ITEMS':
			return { ...state, items: action.items };

		case 'REMOVE_ITEM':
			return { ...state, items: state.items.filter(item => item.id !== action.id) };

		case 'ADD_ITEM':
            // return { ...state, items: [...state.items, state.items.map(item => (action.data.id === items.id) ? action.data : item)] }
            return { ...state, items: [...state.items,  action.data  ] }


		default:
			return state
	}
}