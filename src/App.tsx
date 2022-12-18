import { Button, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import TodoList from 'src/components/TodoList'
import './App.css'

function App() {
  return (
    <>
      <TodoList />

      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Add</Button>
      <Button variant="contained" color="error">
        delete
      </Button>

      <Box>
        <Typography>残りのタスク</Typography>
      </Box>
    </>
  )
}

export default App
