import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');
  const handleChange = (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\b[a-z]/, (letter) =>
      letter.toUpperCase()
    );
    setText(inputValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
};

export default AddTodo;
