const initialState = '';

export default function inputItem(state = initialState, action) {

    switch (action.type) {
        case 'INPUT_ITEM':
            return action.data;
        case 'INPUT_CLEAR':
            return state = action.data;
        default:
            return state
    }
}