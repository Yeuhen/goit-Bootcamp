// export function add() {
//     return {
//         type: 'ADD',
//     }
// }

export const add = (number) => ({
    type: 'ADD',
    data: number
});
export const minus = (number) => ({
    type: 'MINUS',
    data: number
});
export const reset = () => ({
    type: 'RESET'
});

export const incAsync = (number) => dispatch =>{
    setTimeout(()=>{ dispatch(add(number));}, 2000)
};