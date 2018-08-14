const initialState = [];

export default function arrayItems(state=initialState, action) {
    switch (action.type){

        case 'ADD_ITEM':
            return [...state, action.data];

        case 'DELETE_ITEM':
            return state.filter(el => el.id !== action.data);

        case 'SAVE_ITEM':
            return (state.map(el => (el.id === action.data.id ? {...el, text:action.data.text} : el)));

        case 'SWITCH_EDIT_MODE':
            return (
                state.map(el => (el.id === action.data ? {...el, isEdit: !el.isEdit} : el )));
        default:
            return state;
    }
}