import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import NewProduct from './pages/NewProduct';
import ProductDetail from './pages/ProductDetail';
import MyCart from './pages/MyCart';
import ProtectRoute from './components/ProtectRoute';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<NotFound />,
    children:[
      { index:true, path:'/', element:<Home /> },
      { path:'/products', element:<AllProducts /> },
      { path:'/products/new', element:(
        <ProtectRoute requireAdmin={true}>
          <NewProduct />
        </ProtectRoute>
      )},// 어드민만 접속가능
      { path:'/products/:id', element:<ProductDetail /> },
      { path:'/cart', element:(
        <ProtectRoute>
          <MyCart />
        </ProtectRoute>
      )}// 어드민만 접속가능
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
