import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <heade>
        <Link to='/'>Home</Link>
        <Link to='/abc'>Home</Link>
        <Link to='/qwe'>Home</Link>
      </heade>
      <Routes>
        <Route path='/' element={<h1>GGGGG</h1>} />
        <Route path='/abc' element={<h1>abc</h1>} />
        <Route path='/qwe' element={<h1>qwe</h1>} />
        <Route path='*' element={<h1>nothing</h1>} />
      </Routes>
    </div>
  )
}
