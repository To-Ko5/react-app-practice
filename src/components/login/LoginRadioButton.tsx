import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'

const LoginRadioButton = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

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
              value={field.value ? field.value : 'female'}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        )}
      />
    </>
  )
}

export default LoginRadioButton
