import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout><Home/></Layout>}>
      <Route path='/*' element={<Navigate to={"/"}/>}></Route>
      </Route>
    </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
