import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {route} from "./routes/route"
import "./App.css"

const router = createBrowserRouter(route)
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App