import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { FC } from 'react'
import { TodoTypes } from 'src/types/todo'

type Props = {
  todo: TodoTypes
  toggleTodoCheck: (e: string) => void
}
const Todo: FC<Props> = ({ todo, toggleTodoCheck }) => {
  const handleToggle = () => {
    toggleTodoCheck(todo.uuId)
  }
  return (
    <ListItem key={todo.id} role="listitem" button onClick={handleToggle}>
      <ListItemIcon>
        <Checkbox checked={todo.completed} tabIndex={todo.id} disableRipple />
      </ListItemIcon>
      <ListItemText id={String(todo.id)} primary={todo.name} />
      {todo.id}
    </ListItem>
  )
}

export default Todo
