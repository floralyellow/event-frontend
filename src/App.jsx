import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './components/Auth/Auth'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
