import './components/todo/todo.css';
import reactLogo from './assets/react.svg'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: "Learning ReactJS"
    },
    {
      id: 2,
      name: "Watching Youtube"
    }
  ]);

  const stm = "STM";
  const age = 25;
  const data = {
    address: "Quy Nhon",
    country: "Viet Nam"
  }
  const addNewToDo = (name) => {
    alert(`Call me ${name}`);
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewToDo={addNewToDo}
        />
        <TodoData
          name={stm}
          age={age}
          data={data}
          todoList={todoList}
        />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
