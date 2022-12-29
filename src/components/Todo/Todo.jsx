import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import styles from './Todo.module.css';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'complete' : 'active';
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id='checkbox'
        checked={status === 'complete'}
        onChange={handleChange}
      />
      <label htmlFor='checkbox' className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button onClick={handleDelete} className={styles.button}>
          <FaTrashAlt />
        </button>
      </span>
    </li>
  );
};

export default Todo;