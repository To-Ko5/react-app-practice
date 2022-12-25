import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from 'src/components/about/About'
import Blog from 'src/components/blog/Blog'
import NotFound from 'src/components/common/NotFound'
import Gallery from 'src/components/gallery/Gallery'
import TodoForm from 'src/components/todo/TodoForm'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoForm />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

export default App
