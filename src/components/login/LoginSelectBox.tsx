import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'
import { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const LoginSelectBox = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  return (
    <>
      <Controller
        name="age"
        control={control}
        defaultValue=""
        rules={{
          required: { value: true, message: '必須入力です' }
        }}
        render={({ field, fieldState }) => (
          <FormControl fullWidth error={errors.age ? true : false}>
            <InputLabel id="age-select-label">Age</InputLabel>
            <Select
              labelId="age-select-label"
              id="age-select"
              label="Age"
              {...field}
              error={errors.age ? true : false}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <FormHelperText>{fieldState.error?.message}</FormHelperText>
          </FormControl>
        )}
      />
    </>
  )
}

export default LoginSelectBox
