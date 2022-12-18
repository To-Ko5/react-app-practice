import { List, ListItem, Paper } from '@mui/material'
import { FC } from 'react'
import Todo from 'src/components/Todo'
import { TodoTypes } from 'src/types/todo'

type Props = {
  todoList: TodoTypes[]
}

const TodoList: FC<Props> = ({ todoList }) => {
  return (
    <Paper sx={{ overflow: 'auto' }}>
      <List dense component="div" role="list">
        {todoList.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
        <ListItem />
      </List>
    </Paper>
  )
}

export default TodoList
