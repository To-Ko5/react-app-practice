import { List, ListItem, Paper } from '@mui/material'
import { FC } from 'react'
import Todo from 'src/components/Todo'

type Props = {
  todoList: string[]
}
const TodoList: FC<Props> = ({ todoList }) => {
  return (
    <Paper sx={{ overflow: 'auto' }}>
      <List dense component="div" role="list">
        {todoList.map((todo, index) => (
          <Todo key={index} todo={todo} index={index} />
        ))}
        <ListItem />
      </List>
    </Paper>
  )
}

export default TodoList
