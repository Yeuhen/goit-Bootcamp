export const now = (item) => ({
    type: 'NOW',
    data: {text: item, id: Date.now(), isEdit: false}
});
