 export const addItem = (item) => ({
    type: 'ADD_ITEM',
    data: {text: item, id: Date.now(), isEdit: false}
});

export const deleteItem = (id) => ({
    type: 'DELETE_ITEM',
    data: id
});

export const saveItem = (id, text) => ({
    type: 'SAVE_ITEM',
    data: {id, text},
});

export const switchEditMode = (id) => ({
    type: 'SWITCH_EDIT_MODE',
    data: id
});
