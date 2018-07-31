/*eslint-disable*/
import React from 'react';
import styles from './CreateForm.css';


const CreateForm = () => {
  return (
      <div className={styles.list}>
        <input className={styles.input} name="kinput" action='create' placeholder='New Task'/>
        <button type="submit" className={styles.btn__create}>Create</button>
      </div>
  )
};

export default CreateForm;
