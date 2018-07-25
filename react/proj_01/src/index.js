import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App'

ReactDOM.render( <App/>, document.getElementById('root'));











// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
//
// const el = React.createElement('h1',null, 'React the best');
// console.log('Element', el);
// ReactDOM.render(el, document.getElementById('root'))

// const el = React.createElement('h1',{className: 'title'}, 'React the best');
// console.log('Element', el);
// ReactDOM.render(el, document.getElementById('root'));
//
// const el = React.createElement('div',{className: 'box'},
//     React.createElement( 'h1', {className: 'title'}, 'React the best'),
//     React.createElement('p',{className: 'text'}, 'Lorem ipsum text'));
// console.log('Element', el);
//
// ReactDOM.render(el, document.getElementById('root'));

//JSX

// const el = <div className='box'>
//     <h1 className='title'>React from JSX</h1>
//     <p className="text">Lorem ipsum dolor sit amet</p>
// </div>;
// ReactDOM.render(el, document.getElementById('root'));

// const el = <h1>sum 2 + 2 = {2+2}</h1>;   // JavaScript вираз, у вусах лише тернарні операціі, if не буде працювати
// ReactDOM.render(el, document.getElementById('root'));

// const a = 4;
// const b = 5;
// const el = <h1>sum {a + b}</h1>
//
// const isActive = false;
// const el = <h1 className={isActive ? 'active' : 'disable'}>Title</h1>
//
//
// ReactDOM.render(el, document.getElementById('root'));

//component
// розумний і тупий
// state late - лише відмальовує розмітку
// розумний виконує ще й логіку


//розумний
// class MyComp extends React.Component {
//     render() {
//         return <div>My first component</div>
//     }
// }

//тупий
// const MyFirstComp = () => {
//     return <div>My first component</div>
// };
//
// ReactDOM.render( <MyFirstComp/>, document.getElementById('root'));
//
// const Header = () => <h1>Header</h1>;  // Назви компонентів завжди з великої літери
// const Main = () => <h1>Main</h1>;
// const Footer = () => <h1>Footer</h1>;
//
// const App = () => {
//     return ( <div>
//         <Header/>
//         <Main/>
//         <Footer/>
//         </div>
//     )
// }
// ReactDOM.render( <App/>, document.getElementById('root'));