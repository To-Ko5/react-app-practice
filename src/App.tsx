import { Button, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRef, useState } from 'react'
import TodoList from 'src/components/TodoList'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, name: 'todo', completed: true },
    { id: 2, name: 'todo1', completed: false },
    { id: 3, name: 'todo2', completed: false },
    { id: 4, name: 'todo3', completed: false }
  ])
  const [text, setText] = useState('')

  const handleInput = (e: string) => {
    setText(e)
  }

  const handleAddTodo = () => {
    setTodoList((prevTodoList) => {
      return [...prevTodoList, { id: 2, name: text, completed: false }]
    })
    setText('')
  }

  return (
    <>
      <Container maxWidth="sm">
        <Box mt={4} mb={4}>
          <TodoList todoList={todoList} />
        </Box>

        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          value={text}
          onChange={(e) => handleInput(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddTodo}>
          Add
        </Button>
        <Button variant="contained" color="error">
          delete
        </Button>

        <Box>
          <Typography>残りのタスク</Typography>
        </Box>
      </Container>
    </>
  )
}

export default App
