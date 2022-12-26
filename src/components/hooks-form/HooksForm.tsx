import { Button, Select, TextareaAutosize, TextField } from '@mui/material'
import React, { useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'

const HooksForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm({})

  const onSubmit = (data: any) => {
    console.log(data)
  }

  const clickButton = useCallback((data: any) => {
    console.log(data)
  }, [])

  const clickReset = useCallback(() => {
    reset({ name: 'name', email: 'abc@gmail.com', text: 'test' })
  }, [])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="名前"
        type="text"
        {...register('name', {
          required: '必須入力',
          maxLength: {
            value: 50,
            message: '最大50文字です'
          }
        })}
        error={errors.name ? true : false}
        helperText={errors.name?.message as string}
      />

      <TextField
        label="メールアドレス"
        type="email"
        {...register('email', {
          pattern: {
            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            message: 'メールアドレスで入力してください'
          },
          required: '必須入力',
          maxLength: {
            value: 50,
            message: '最大50文字です'
          }
        })}
        error={errors.email ? true : false}
        helperText={errors.email?.message as string}
      />

      <TextareaAutosize
        {...register('text', {
          required: '必須入力',
          maxLength: {
            value: 200,
            message: '最大50文字です'
          }
        })}
      />
      <Button
        type="button"
        variant="contained"
        onClick={handleSubmit(clickButton)}
      >
        送信
      </Button>

      <Button type="button" variant="outlined" onClick={clickReset}>
        リセット
      </Button>
    </form>
  )
}

export default HooksForm
