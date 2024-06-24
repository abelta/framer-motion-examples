import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Animate from 'pages/Animate'
import Presence from 'pages/Presence'
import Color from 'pages/Color'
import Events from 'pages/Events'
import Layout from 'pages/Layout'
import Scroll from 'pages/Scroll'
import Variants from 'pages/Variants'
import './globals.css'

const router = createBrowserRouter([
  { path: '/', element: <Animate /> },
  { path: '/animate', element: <Animate /> },
  { path: '/presence', element: <Presence /> },
  { path: '/color', element: <Color /> },
  { path: '/events', element: <Events /> },
  { path: '/layout', element: <Layout /> },
  { path: '/scroll', element: <Scroll /> },
  { path: '/variants', element: <Variants /> },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
