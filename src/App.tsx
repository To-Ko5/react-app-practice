import { Button, Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import TodoList from 'src/components/TodoList'
import { v4 as uuidv4 } from 'uuid'
import { TodoTypes } from 'src/types/todo'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState<TodoTypes[]>([])
  const [text, setText] = useState('')

  const handleInput = (e: string) => {
    setText(e)
  }

  const handleAddTodo = () => {
    setTodoList((prevTodoList) => {
      return [
        ...prevTodoList,
        {
          id: todoList.length + 1,
          uuId: uuidv4(),
          name: text,
          completed: false
        }
      ]
    })
    setText('')
  }

  const toggleTodoCheck = (uuId: string) => {
    const newTodoList = [...todoList]
    const todo = newTodoList?.find((todo) => todo.uuId === uuId)
    if (todo) {
      todo.completed = !todo.completed
    }
    setTodoList(newTodoList)
  }

  return (
    <>
      <Container maxWidth="sm">
        <Box mt={4} mb={4}>
          <TodoList todoList={todoList} toggleTodoCheck={toggleTodoCheck} />
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
