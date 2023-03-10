import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from 'src/components/about/About'
import Blog from 'src/components/blog/Blog'
import NotFound from 'src/components/common/NotFound'
import Gallery from 'src/components/gallery/Gallery'
import HooksForm from 'src/components/hooks-form/HooksForm'
import SearchApp from 'src/components/search-app/SearchApp'
import TodoForm from 'src/components/todo/TodoForm'
import Login from 'src/components/login/Login'

import './App.css'
import LoginComplete from 'src/components/login/LoginComplete'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/hooks-form" element={<HooksForm />} />
      <Route path="/search-app" element={<SearchApp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-complete" element={<LoginComplete />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
