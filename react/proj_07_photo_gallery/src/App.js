import React, {Component} from 'react';
import logo from './logo.svg';
import {inputClear, inputItem} from './redux/actions/searchAction'
import {connect} from 'react-redux'
import {galleryAsync} from './redux/actions/galleryAction';
import Gallery from './Components/Gallery/Gallery';
import AuthorList from './Components/AuthorList/AuthorList';

import './App.css';

class App extends Component {




    componentDidMount() {
        this.props.getGalary({category:'natural', search:''})
    }

    categoryByDef =(e) => {
        e.preventDefault();
        this.props.getGalary({category:e.target.id, search:''})
    };


    searchInput = (e) => {
        e.preventDefault();
        if (this.props.search !== '') {
            this.props.getGalary({category:'', search: this.props.search});
            this.props.inputClear();
        }
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <form onSubmit={this.searchInput}>
                        <input type="text"
                               placeholder="enter word"
                               name="item"
                               className='input'
                               onChange={this.props.inputItem}
                               value={this.props.item}
                        />
                        <button type='submit'>Submit</button>
                    </form>
                </header>
                <main>
                    <div className='sidebar'>
                        <button type="button" id="animals" onClick={this.categoryByDef} checked>animals</button>
                        <button type="button" id="travel" onClick={this.categoryByDef}>travel</button>
                        <button type="button" id="buildings" onClick={this.categoryByDef}>buildings</button>
                        <button type="button" id="places" onClick={this.categoryByDef}>places</button>
                    </div>
                    <div className="gallery">
                    </div>
                    <Gallery/>
                    <AuthorList/>
                </main>
            </div>
        );
    }
}

function mSTP(state) {
    return {
        search: state.search
    }

}

function mDTP(dispatch) {
    return {

        inputItem: function (e) {
            dispatch(inputItem(e.target.value))
        },
        inputClear: function () {
            dispatch(inputClear())
        },
        getGalary(query) {
            dispatch(galleryAsync(query))
        },

    }
}

export default connect(mSTP, mDTP)(App);