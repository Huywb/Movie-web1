import { useState } from 'react'
import viteLogo from '/vite.svg'
import  {RouterProvider} from 'react-router-dom'
import { router } from './router'
import Sidebar from './components/sidebar'
import { Provider } from 'react-redux'
import {store} from './redux/store'

function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>)
}

export default App
