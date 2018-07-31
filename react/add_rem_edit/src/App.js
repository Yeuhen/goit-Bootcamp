/*eslint-disable*/
import React, {Component} from 'react';
import Header from './Components/Header/Header';
import LinesList from './Components/LinesList/LinesList'
import Button from './Components/Btn/Btn'
import styles from './App.css';

class App extends Component {

  state = {
    items: [],
    item: '',
  };

  itemChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    })
  };

  addLine = (e) => {
    e.preventDefault();
    const task = {
      text: this.state.item,
      id: Date.now(),
    };
    if (this.state.item !== '') {
      this.setState(prevState => ({
        items: [task, ...prevState.items],
        item: '',
      }))
    }
  };

  //------------------------------------------

  delLine = (id) => {
    const filter = this.state.items.filter(el => el.id !== id);
    this.setState({
      items: filter,
    })
  };

//-------------------------------------------

  updateLine = (id, text) => {
    const updateRes = this.state.item.map(el => (el.id === id ? {...el, text: text} : el));
    this.setState({
      items: updateRes,
    })
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.app}>
          <Header/>
          <div
            onSubmit={this.addLine}
            className={styles.inForm}>
            <input
              type="text"
              className={styles.input}
              name="input"
              placeholder="New Task"
              onChange={this.itemChange}
              value={this.state.item}
            />
            <Button type="submit"
                    className={styles.btn__create}
                    text='Create'
            />
          </div>
          <LinesList
            elements={this.state.items}
            delLine={this.delLine}
            update={this.updateLine}
          />
        </div>
      </div>
    )
  }
}

export default App;
