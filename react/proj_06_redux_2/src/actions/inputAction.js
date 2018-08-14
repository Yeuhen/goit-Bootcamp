export const inputItem =(stringInput) =>({
    type: 'INPUT_ITEM',
    data: stringInput,
});
export const inputClear =() =>({
    type: 'INPUT_CLEAR',
    data: '',
});