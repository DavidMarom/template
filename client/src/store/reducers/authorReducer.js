const initialState = {
    authors: [],
    authorCount: null,
	activeAuthor : null
}

export function author(state = initialState, action = {}) {
    switch (action.type) {
        case 'COUNT_AUTHORS':
            return { ...state, authorCount: action.number[0]['total'] };
        
        case 'SET_AUTHOR':
            return { ...state, activeAuthor: action.author };

        // case 'GET_AUTHOR':
        //     return { ...state, singleAuthor: action.authorId };

        case 'SET_AUTHORS':
            return { ...state, authors: action.authors };

        // case 'REMOVE_AUTHOR':
        //     return { ...state, authors: state.authors.filter(author => author._id !== action.authorId) };
        
        case 'UPDATE_AUTHOR':
            return { ...state, author: state.authors.map(author => (action._author._id === author._id) ? action._author : author) }


        default:
            return state
    }
}