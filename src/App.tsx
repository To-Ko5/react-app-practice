import {
  Button,
  Container,
  Grid,
  Skeleton,
  Snackbar,
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
  const [error, setError] = useState(false)

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
    const todoCompleted = todoList.some((todo) => todo.completed === true)
    if (!todoCompleted) {
      setError(true)
      return
    }
    const newTodoList = todoList.filter((todo) => !todo.completed)

    setTodoList(newTodoList)
  }

  const handleSnackbarClose = () => {
    setError(false)
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

        <Grid container spacing={1} alignItems="center">
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
            <Button variant="outlined" color="error" onClick={handleClear}>
              delete
            </Button>
          </Grid>
        </Grid>

        <Box>
          <Typography>
            残りのタスク
            <Box component="span">{todoListFilter()}</Box>
          </Typography>
        </Box>

        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message="削除するタスクを選択してください"
        />
      </Container>
    </>
  )
}

export default App
