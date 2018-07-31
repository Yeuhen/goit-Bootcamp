/* eslint-disable */
import React, {Component} from 'react';
import axios from 'axios';
import ToDoList from './Components/ToDoList/ToDoList';
import Button from './Components/Button/Button';
import styles from './App.css';



class App extends Component {

  state = {
    items: [],
    item: '',
  };

  componentDidMount(){  // При першій загрузці, після отрисовці сайту, у Сет підтягується інфа з серваку
    axios.get('/tasks').then(({data,status})=> { // axios дозволяє не перетворювати json формат
      if (status===200){  // перевірка на корректний респонс
        this.setState({   // записуємо у state..
          items:data     // у масив items значення з серваку з data
        })
      }
    })
  }


  itemChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value,
    })
  };

  addItem = (e) => {
    e.preventDefault();
if (this.state.item !== '') {
    const task = {text: this.state.item};
    axios.post('/tasks', task).
    then(({data,status}) => {
      if (status === 201){
        this.setState(prev => ({
          items: [data, ...prev.items],
          item:'',
        }))
      }
    })
}

    // const task = {
    //   text: this.state.item,
    //   id: Date.now(),
    // };
    // if (this.state.item !==''){
    // this.setState(prevState => ({
    //   items: [task, ...prevState.items],
    //   item: '',
    // }))
    // }
  };

  deleteItem = (id) => {
    axios.delete(`/tasks/${id}`).then(({status}) => {
    if (status === 200) {
      this.setState ({
        items: this.state.items.filter(el => el.id !== id)
      })
    }
  })
  };
  //   const filter = this.state.items.filter( el => el.id !== id);
  //   this.setState({
  //     items: filter,
  //   })
  // };

  updateItem =(id, text) => {
    //old method
    const task = this.state.items.find(el => el.id === id);
    axios.put(`/tasks/${id}`,{...task, text,}).then(({data, status})=>{
      if (status ===200){
        this.setState({
          items: this.state.items.map(el => (el.id === id ? data: el))
        })
      }
      }
    )

    //new method
    // axios.put(`http://localhost:3001/tasks/${id}`,{text:text}).then(response => console.log(response))
//---------------------------------------------


    // const updateResult = this.state.items.map(el => (el.id === id ? {...el,text:text}: el))
    // this.setState({
    //   items: updateResult,
    // })
  };


  render() {
    return (
      <div className={styles.todoListMain}>
        <div className='header'>
          <form onSubmit={this.addItem}>
            <input type="text"
                   placeholder="enter task"
                   name="item"
                   className={styles.input}
                   onChange={this.itemChange}
                   value={this.state.item}
            />
            <Button text = 'Add' type = 'submit'/>
            {/*<button type='submit'*/}
                    {/*className={styles.btn}>Add*/}
            {/*</button>*/}
          </form>
          <ToDoList tasks = {this.state.items}
          deleteItem = {this.deleteItem}
          update={this.updateItem}/>
        </div>
      </div>
    );
  }
}

export default App;
