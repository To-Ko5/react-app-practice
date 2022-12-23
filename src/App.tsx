import {
  Button,
  Container,
  Grid,
  Skeleton,
  TextField,
  Typography
} from '@mui/material'
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

  const todoListFilter = () => {
    return Number(todoList.filter((todo) => !todo.completed).length)
  }

  const handleClear = () => {
    const newTodoList = todoList.filter((todo) => !todo.completed)
    setTodoList(newTodoList)
  }

  return (
    <>
      <Container maxWidth="md">
        <Box mt={4} mb={4}>
          {todoList.length ? (
            <TodoList todoList={todoList} toggleTodoCheck={toggleTodoCheck} />
          ) : (
            <Skeleton variant="rectangular" height={60} />
          )}
        </Box>

        <Grid container spacing={1} alignItems="ce">
          <Grid item>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={text}
              onChange={(e) => handleInput(e.target.value)}
            />
          </Grid>
          <Grid item alignItems="center">
            <Button variant="contained" onClick={handleAddTodo}>
              Add
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="error">
              delete
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="error" onClick={handleClear}>
              completed todo clear
            </Button>
          </Grid>
        </Grid>

        <Box>
          <Typography>
            残りのタスク
            <Box component="span">{todoListFilter()}</Box>
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default App
