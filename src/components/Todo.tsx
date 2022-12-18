import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { FC } from 'react'

type Props = {
  todo: string
  index: number
}
const Todo: FC<Props> = ({ todo, index }) => {
  return (
    <ListItem key={index} role="listitem" button>
      <ListItemIcon>
        <Checkbox tabIndex={-1} disableRipple />
      </ListItemIcon>
      <ListItemText primary={todo} />
    </ListItem>
  )
}

export default Todo
