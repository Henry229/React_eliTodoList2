import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

const TodoList = ({ filter }) => {
  const [toDos, setToDos] = useState(readToDosFromLocalStorage());

  const handleAdd = (todo) => setToDos([...toDos, todo]);
  const handleUpdate = (updated) =>
    setToDos(toDos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setToDos(toDos.filter((t) => t.id !== deleted.id));

  const filtered = getFilteredItems(toDos, filter);

  useEffect(() => {
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
};

const readToDosFromLocalStorage = () => {
  const toDos = localStorage.getItem('toDos');
  return toDos ? JSON.parse(toDos) : [];
};

const getFilteredItems = (toDos, filter) => {
  if (filter === 'all') {
    return toDos;
  }
  return toDos.filter((todo) => todo.status === filter);
};

export default TodoList;
