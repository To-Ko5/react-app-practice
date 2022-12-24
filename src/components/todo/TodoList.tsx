import { List, ListItem, Paper } from '@mui/material'
import { FC } from 'react'
import Todo from 'src/components/todo/Todo'
import { TodoTypes } from 'src/types/todo'

type Props = {
  todoList: TodoTypes[]
  toggleTodoCheck: (e: string) => void
}

const TodoList: FC<Props> = ({ todoList, toggleTodoCheck }) => {
  return (
    <Paper sx={{ overflow: 'auto' }}>
      <List dense component="div" role="list">
        {todoList.map((todo, index) => (
          <Todo key={index} todo={todo} toggleTodoCheck={toggleTodoCheck} />
        ))}
        <ListItem />
      </List>
    </Paper>
  )
}

export default TodoList
