export const inputItem =(wordInput) =>({
    type: 'SEARCH_ITEM',
    data: wordInput,
});
export const inputClear =() =>({
    type: 'SEARCH_CLEAR',
    data: '',
});
