import './components/todo/todo.css';
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './services/api.service';
import { useContext, useEffect } from 'react';
import { AuthContext } from './components/context/auth.context';
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);
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
    await delay(2000);
    if (response.data) {
      setUser(response.data.user);
    }
    setIsAppLoading(false);
  }

  return (
    <>
      {isAppLoading === true ?
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spin tip="Loading" size="large">
            <div style={{
              padding: 50,
              borderRadius: 4,
            }} />
          </Spin>
        </div>
        :
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      }
    </>
  )
}

export default App
