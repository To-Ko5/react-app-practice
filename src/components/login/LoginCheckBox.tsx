import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

const LoginCheckBox = () => {
  const {
    control,
    formState: { errors }
  } = useFormContext()

  return (
    <>
      <Controller
        name="loginedCheck"
        control={control}
        defaultValue={false}
        render={({ field }) => (
          <FormControlLabel
            {...field}
            control={<Checkbox name="loginedCheck" />}
            label="ログイン状態を保持する"
          />
        )}
      />
    </>
  )
}

export default LoginCheckBox
