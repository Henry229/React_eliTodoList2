import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

const TodoList = () => {
  const [toDos, setToDos] = useState([
    { id: '123', text: 'Getting market', status: 'active' },
    { id: '124', text: 'Studying', status: 'active' },
  ]);

  const handleAdd = (todo) => setToDos([...toDos, todo]);
  const handleUpdate = (updated) =>
    setToDos(toDos.map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) =>
    setToDos(toDos.filter((t) => t.id !== deleted.id));

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {toDos.map((item) => (
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

export default TodoList;
