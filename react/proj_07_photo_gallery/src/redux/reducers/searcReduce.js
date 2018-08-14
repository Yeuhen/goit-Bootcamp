const initialState = '';

export default function inputItem(state = initialState, action) {

    switch (action.type) {
        case 'SEARCH_ITEM':
            return action.data;
        case 'SEARCH_CLEAR':
            return action.data;
        default:
            return state
    }
}