import { Button, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import TodoList from 'src/components/TodoList'
import './App.css'

function App() {
  const [todoList, setTodos] = useState([
    { id: 1, name: 'todo', completed: false },
    { id: 2, name: 'todo1', completed: false },
    { id: 3, name: 'todo2', completed: false },
    { id: 4, name: 'todo3', completed: false }
  ])

  return (
    <>
      <Container maxWidth="sm">
        <Box mt={4} mb={4}>
          <TodoList todoList={todoList} />
        </Box>

        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <Button variant="contained">Add</Button>
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
