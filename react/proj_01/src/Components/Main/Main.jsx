import React from 'react';
import Post from '../Post/Post';
import List from '../List/List';

const Main = () => {
    return (
        <div>
            <h1>Main component</h1>
            <Post title='Title 1' text = 'Paragraph 1' likes = {100} date = '02.06.2018'/>
            <Post title='Title 2' text = 'Paragraph 2' date = '05.04.2018'/>
            <Post title='Title 3' text = 'Paragraph 3' likes = {1}/>
            <List arrNumbers = {[1, 2, 3, 4, 5, 6, 7, 8, 9]}/>
            <List arrNumbers = {[5, 10, 15, 20, 25, 30, 35, 40, 45]}/>
        </div>
    )
};
// Настройка title&text просто назви настроєк (properties)
export default Main;