import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { api } from '../api';
import { useServerData } from '../state/serverDataContext';
const Home = () => {
  const serverTodos = useServerData(data => {
    return data.todos || [];
  });
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(serverTodos);

  return (
    <div>
      <h1>Home page </h1>
      <p>
        You can check your{' '}
        <NavLink to="/CurrencyExchange">currency convertion</NavLink>
      </p>
      <form
        onSubmit={e => {
          e.preventDefault();

          const newTodo = {
            text
          };

          api.todos.create(newTodo).then(res => {
            setTodos([...todos, res]);
            setText('');
          });
        }}
      >
        <label htmlFor="todo">Add a todo</label>
        <br />
        <p>enter input and hit enter</p>
        <input
          id="todo"
          type="text"
          value={text}
          autoComplete="off"
          onChange={e => setText(e.target.value)}
        />
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

Home.fetchData = () => {
  return api.todos.all().then(todos => {
    return {
      todos
    };
  });
};

export default Home;
