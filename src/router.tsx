import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from './layouts/Main'
import { Landing } from './pages/Landing'
import { Categories } from './pages/Categories'
import { Products } from './pages/Products'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Landing />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'products/:category',
        element: <Products />,
      },
    ],
  },
])
