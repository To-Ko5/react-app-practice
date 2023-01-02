import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'
import { useState } from 'react'

const LoginSelectBox = () => {
  const [age, setAge] = useState('')
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string)
  }
  return (
    <>
      <FormControl fullWidth>
        <InputLabel id="age-select-label">Age</InputLabel>
        <Select
          labelId="age-select-label"
          id="age-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}

export default LoginSelectBox
