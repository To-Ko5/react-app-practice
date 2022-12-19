import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { FC } from 'react'
import { TodoTypes } from 'src/types/todo'

type Props = {
  todo: TodoTypes
}
const Todo: FC<Props> = ({ todo }) => {
  return (
    <ListItem key={todo.id} role="listitem">
      <ListItemIcon>
        <Checkbox checked={todo.completed} tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText primary={todo.name} />
    </ListItem>
  )
}

export default Todo
