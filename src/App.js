import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Layout from './Layout'

export default function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<h1>GGGGG</h1>} />
          <Route path='/abc' element={<h1>abc</h1>} />
          <Route path='/qwe' element={<h1>qwe</h1>} />
          <Route path='*' element={<h1>nothing</h1>} />
        </Route>

      </Routes>
    </div>
  )
}
