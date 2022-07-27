import { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import Header from './components/header';
import TodoItem from './components/TodoItem';
import styles from './App.module.scss';
import database from './DataBase';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    database.get((data) => {
      setTodos(data);
    });
  };

  const handlerChange = (todo) => {
    database.put({ ...todo, completed: !todo.completed }, () => {
      getData();
    });
  };

  const handlerDelete = (id) => {
    database.del(id, () => {
      getData();
    });
  };

  const handlerAdd = (todo) => {
    database.post(todo, () => {
      getData();
    });
  };

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.content}>
        <AddTodo handlerAdd={handlerAdd} />
        <div className={styles.todos}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handlerChange={handlerChange}
              handlerDelete={handlerDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
