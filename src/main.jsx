import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", element: <App />,
  },
  {
    path: "/login",
    element: <h1>Login Page</h1>
  },
  {
    path: "/register",
    element: <h1>Register Page</h1>
  },
  {
    path: "/users",
    element: <h1>Users Page</h1>
  },
  {
    path: "/products",
    element: <h1>Products Page</h1>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
