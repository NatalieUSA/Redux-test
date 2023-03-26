import { useSelector } from 'react-redux';

import TodoItem from '../ToDoItems/ToDoItems';

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          //   toggleTodoComplete={toggleTodoComplete}
          //   removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
