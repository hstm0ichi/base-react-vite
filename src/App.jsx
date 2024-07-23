import './components/todo/todo.css';
import reactLogo from './assets/react.svg'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import { Outlet, Link } from 'react-router-dom';


const App = () => {


  return (
    <>

      <Header />

      <Outlet />
      <Footer />
    </>
  )
}

export default App
