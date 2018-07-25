import React from 'react';
import PropTypes from 'prop-types';

// const Post = () => {
//     console.log('properties:',props);
//     return (
//     <div>
//         <h2>{props.title}</h2>
//         <p>{props.text}</p>
//         <p>Likes {props.likes}</p>
//         <p>Publication date {props.date}</p>
//
//     </div>
// )
// };
//propse виключно для читання
// Після деструктурізаціі

const Post = ({title, text, likes, date}) => {
    return (
    <div>
        <h2>{title}</h2>
        <p>{text}</p>
        <p>Likes {likes}</p>
        <p>Publication date {date}</p>

    </div>
)
};


Post.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    likes: PropTypes.number,
    date: PropTypes.string,
};

Post.defaultProps = {
    likes: 10000,
    date: `${Date.now()}`,
};

export default Post;