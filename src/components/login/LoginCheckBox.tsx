import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

const LoginCheckBox = () => {
  return (
    <>
      <FormControlLabel
        control={<Checkbox name="login" />}
        label="ログイン状態を保持する"
      />
    </>
  )
}

export default LoginCheckBox
