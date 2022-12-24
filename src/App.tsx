import {
  Button,
  Container,
  Dialog,
  DialogTitle,
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
  const [duplicationError, setDuplicationError] = useState(false)
  const [editDialog, setEditDialog] = useState(false)
  const [editText, setEditText] = useState<TodoTypes>({
    id: 0,
    uuId: '',
    name: '',
    completed: false
  })

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
    setDuplicationError(false)
  }

  const handleEditTodo = () => {
    // 選択されているか確認する
    const todoCompleted = todoList.some((todo) => todo.completed === true)
    if (!todoCompleted) {
      setError(true)
      return
    }
    // チェックの重複が無いか確認する
    let completedList: TodoTypes[] = []
    todoList.forEach((todo) => {
      if (todo.completed) {
        completedList.push(todo)
      }
    })

    if (completedList.length > 1) {
      setDuplicationError(true)
      return
    }
    if (completedList.length) {
      setEditText(completedList[0])
      setEditDialog(true)
    }
  }

  const handleEditInput = (e: string) => {
    setEditText((prevState) => ({ ...prevState, name: e }))
  }

  const handleCompleteEditTodo = () => {
    setTodoList((prevState) =>
      prevState.map((todo) => {
        if (todo.uuId === editText.uuId) {
          return {
            id: editText.id,
            uuId: editText.uuId,
            name: editText.name,
            completed: editText.completed
          }
        }
        return todo
      })
    )
    setEditText({ id: NaN, uuId: '', name: '', completed: false })
    setEditDialog(false)
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
          <Grid item alignItems="center">
            <Button
              variant="contained"
              color="warning"
              onClick={handleEditTodo}
            >
              Edit
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

        <Dialog onClose={() => setEditDialog(false)} open={editDialog}>
          <Box padding={2}>
            <DialogTitle>編集する</DialogTitle>
            <Box mb={2}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={editText?.name}
                onChange={(e) => handleEditInput(e.target.value)}
              />
            </Box>
            <Box textAlign="right">
              <Button onClick={handleCompleteEditTodo}>完了</Button>
            </Box>
          </Box>
        </Dialog>

        <Snackbar
          open={error}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
          message="削除するタスクを選択してください"
        />

        <Snackbar
          open={duplicationError}
          autoHideDuration={2000}
          onClose={handleSnackbarClose}
          message="編集するタスクを一つ選択してください"
        />
      </Container>
    </>
  )
}

export default App
