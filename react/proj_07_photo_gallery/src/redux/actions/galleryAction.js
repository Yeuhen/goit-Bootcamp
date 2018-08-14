import axios from 'axios';


export function gallery(data) {
    return {
        type: 'DOWNLOADED',
        data: data,
    }
}

const END_POINT = 'https://pixabay.com/api/?key=';
const API_KEY = '5018958-ed49ccd90878e6614abdf24a6';



function getGallery(query) {
    const result = axios.get(`${END_POINT}${API_KEY}&category=${query.category}&q=${query.search}&order=popular&per_page=9`);
    console.log(result);
    return result
}

export const galleryAsync = (query) => dispatch => {
    getGallery(query).then(data => dispatch(gallery(data.data)))
};