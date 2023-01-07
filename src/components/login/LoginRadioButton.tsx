import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material'
import { useEffect } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const LoginRadioButton = () => {
  const {
    control,
    getValues,
    formState: { errors }
  } = useFormContext()

  useEffect(() => {})

  return (
    <>
      <Controller
        name="gender"
        control={control}
        rules={{
          required: { value: true, message: '必須入力です' }
        }}
        render={({ field, fieldState }) => (
          <FormControl {...field}>
            <FormLabel id="gender-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender-group-label"
              name="gender"
              onChange={(e) => {
                const value = parseInt(e.target.value)
                if (!isNaN(value)) {
                  field.onChange(value)
                }
              }}
              value={field.value === undefined ? 0 : field.value}
            >
              <FormControlLabel value="0" control={<Radio />} label="Female" />
              <FormControlLabel value="1" control={<Radio />} label="Male" />
              <FormControlLabel value="2" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        )}
      />
    </>
  )
}

export default LoginRadioButton
