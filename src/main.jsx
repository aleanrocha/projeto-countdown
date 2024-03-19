import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './routes/Home'
import Countdown from './routes/Countdown'
import { CountdownProvider } from './context/CountdownContext'

import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/projeto-countdown',
    element: <App />,
    children: [
      {
        path: '/projeto-countdown',
        element: <Home />,
      },
      {
        path: '/projeto-countdown/contador',
        element: <Countdown />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountdownProvider>
      <RouterProvider router={router} />
    </CountdownProvider>
  </React.StrictMode>
)
