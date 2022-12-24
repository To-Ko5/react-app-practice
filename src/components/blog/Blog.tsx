import { useParams } from 'react-router-dom'

const Blog = () => {
  const { id } = useParams()
  return (
    <>
      <h1>Blog</h1>
      <p>{id}</p>
    </>
  )
}

export default Blog
