export default function gallery (state = [], action) {
    switch (action.type) {
        case 'DOWNLOADED':
            return [...action.data.hits];
        default:
            return state;
    }

}