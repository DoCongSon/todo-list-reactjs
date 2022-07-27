const getById = (id, callback) => {
  fetch(`http://localhost:3004/list-todo/${id}`)
    .then((response) => response.json())
    .then(callback);
};

const get = (callback) => {
  fetch(`http://localhost:3004/list-todo/`)
    .then((response) => response.json())
    .then(callback);
};

const post = (todo, callback) => {
  fetch(`http://localhost:3004/list-todo/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then(callback);
};

const put = (todo, callback) => {
  fetch(`http://localhost:3004/list-todo/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then(callback);
};

const del = (id, callback) => {
  fetch(`http://localhost:3004/list-todo/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(callback);
};

const database = {
  get,
  getById,
  post,
  put,
  del,
};

export default database;
