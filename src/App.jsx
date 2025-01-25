import { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Version from './components/Version';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /> <Home /></>,
      errorElement: <div>Oops! Something went wrong.</div> // Error handling UI
    },
    {
      path: '/versions',
      element: <><Navbar /> <Version /></>,
      errorElement: <div>Oops! Something went wrong.</div> // Error handling UI
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
