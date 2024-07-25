import './components/todo/todo.css';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './services/api.service';
import { useContext, useEffect } from 'react';
import { AuthContext } from './components/context/auth.context';
const App = () => {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    fetchUserInfo();
  }, [])

  const delay = (milSeconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, milSeconds);
    })
  }

  const fetchUserInfo = async () => {
    const response = await getAccountAPI();
    await delay(3000);
    if (response.data) {
      setUser(response.data.user);
    }
  }
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
