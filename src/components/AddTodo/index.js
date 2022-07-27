import React, { useRef, useState } from 'react';
import styles from './AddTodo.module.scss';

function AddTodo({ handlerAdd }) {
  const [todo, setTodo] = useState('');
  const inputRef = useRef();

  const handlerClick = () => {
    if (todo !== '') {
      handlerAdd({ content: todo, completed: false });
      setTodo('');
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.addTodo}>
      <input
        ref={inputRef}
        type='text'
        placeholder='Add a new todo'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handlerClick}>Add todo</button>
    </div>
  );
}

export default AddTodo;
