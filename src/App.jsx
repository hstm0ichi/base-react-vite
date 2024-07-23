import './components/todo/todo.css';
import reactLogo from './assets/react.svg'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { useState } from 'react';

const App = () => {

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [todoList, setTodoList] = useState([]);

  const addNewToDo = (name) => {
    if (name === "") {
      return;
    }
    const newTodo = {
      id: randomIntFromInterval(1, 10000000),
      name: name
    }

    setTodoList([...todoList, newTodo]);

  }

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter(item => item.id !== id);
    setTodoList(newTodoList);
  }

  return (
    <>
    <Header/>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew
          addNewToDo={addNewToDo}
        />

        {todoList.length > 0 ?
          <>
            <TodoData
              todoList={todoList}
              deleteTodo={deleteTodo}
            />
          </>
          :
          <>
            <div className='todo-image'>
              <img src={reactLogo} className='logo' />
            </div>
          </>
        }

      </div>
      <Footer/>
    </>
  )
}

export default App
