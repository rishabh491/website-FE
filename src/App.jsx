import { useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'

function App() {
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