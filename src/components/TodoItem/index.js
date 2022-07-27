import React from 'react';
import styles from './TodoItem.module.scss';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

function TodoItem(props) {
  const { todo, handlerChange, handlerDelete } = props;

  return (
    <div className={styles.todoItem}>
      <input
        type='checkbox'
        checked={todo.completed}
        onChange={() => handlerChange(todo)}
      />
      <span className='content'>{todo.content}</span>
      <div className='actions'>
        <button type='button' onClick={() => handlerDelete(todo.id)}>
          <DeleteForeverTwoToneIcon fontSize='large' />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
