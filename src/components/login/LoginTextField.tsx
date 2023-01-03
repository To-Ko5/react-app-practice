import { TextField } from '@mui/material'
import { FC } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const LoginTextField: FC<{ type: string }> = ({ type }) => {
  const {
    register,
    control,
    formState: { errors }
  } = useFormContext()

  const label = type === 'name' ? '名前' : 'パスワード'

  return (
    <>
      <Controller
        name={type}
        control={control}
        defaultValue=""
        rules={{
          required: { value: true, message: '必須入力です' },
          maxLength: { value: 10, message: '最大10文字です' }
        }}
        render={({ field }) => (
          <TextField
            {...field}
            label={label}
            type="text"
            error={errors[type] ? true : false}
            helperText={errors[type]?.message as string}
            fullWidth
          />
        )}
      />
    </>
  )
}

export default LoginTextField
