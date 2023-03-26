import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';

import TodoList from './components/ToDoList/ToDoList';
import InputField from './components/InputField/InputField';

export const ToDo = () => {
  //   const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  };
  //   const addTodo = () => {
  //     if (text.trim().length) {
  //       setTodos([
  //         ...todos,
  //         { id: new Date().toISOString(), text, completed: false },
  //       ]);
  //       setText('');
  //     }
  //   };

  //   const removeTodo = todoId => {
  //     // setTodos(todos.filter(todo => todo.id !== todoId));
  //   };

  //   const toggleTodoComplete = todoId => {
  //     // setTodos(
  //     //   todos.map(todo => {
  //     //     if (todo.id !== todoId) return todo;
  //     //     return {
  //     //       ...todo,
  //     //       completed: !todo.completed,
  //     //     };
  //     //   })
  //     // );
  //   };

  return (
    <div>
      <InputField text={text} handleImput={setText} handleSubmit={addTask} />
      {/* <label>
        <input
          className={css.input}
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button onClick={aoddTod} className={css.btn}>
          Add Todo
        </button>
      </label> */}

      <TodoList
      // todos={todos}
      // toggleTodoComplete={toggleTodoComplete}
      // removeTodo={removeTodo}
      />
      {/* <ul>
        {todos.map(todo => (
          <li key={todo.id} className={css.list}>
            <input
              onChange={() => toggleTodoComplete(todo.id)}
              className={css.checkbox}
              type="checkbox"
              checked={todo.completed}
            />
            <span>{todo.text}</span>
            <span onClick={() => removeTodo(todo.id)} className={css.delete}>
              &times;
            </span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
