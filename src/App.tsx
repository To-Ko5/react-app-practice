import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import TodoForm from 'src/components/todo/TodoForm'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoForm />} />
    </Routes>
  </BrowserRouter>
)

export default App
