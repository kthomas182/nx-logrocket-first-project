import React, { useEffect, useState } from 'react';
import LogRocket from 'logrocket';
interface Todo {
  title: string;
}

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  LogRocket.init('9lhpzm/first-project-2s2xh');
  // This is an example script - don't forget to change it!
  LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
    name: 'Kyle Thomas',
    email: 'kyle.thomas@essilorusa.com',

    // Add your own custom user variables here, ie:
    subscriptionType: 'pro'
  });
  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  function addTodo() {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((t) => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>
      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default App;
