export default function counter(state = 0, {type, data}) {
    switch (type) {
        case 'ADD':
            return state + data;
        case 'RESET':
            return 0;
        case 'MINUS':
            return state - data;
        default:
            return state
    }

}