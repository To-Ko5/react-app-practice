import { Box, Button, Container, Stack, TextField } from '@mui/material'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'

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
    <Container maxWidth="md">
      <Box maxWidth="500px" style={{ margin: '80px auto 0' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <Box>
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
                fullWidth
              />
            </Box>
            <Box>
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
                fullWidth
              />
            </Box>
            <Box>
              <TextField
                label="本文"
                type="text"
                {...register('text', {
                  required: '必須入力',
                  maxLength: {
                    value: 200,
                    message: '最大50文字です'
                  }
                })}
                error={errors.text ? true : false}
                helperText={errors.text?.message as string}
                multiline
                fullWidth
                rows={5}
              />
            </Box>
            <Box>
              <Button
                type="button"
                variant="outlined"
                onClick={clickReset}
                style={{ marginRight: '20px' }}
              >
                リセット
              </Button>
              <Button
                type="button"
                variant="contained"
                onClick={handleSubmit(clickButton)}
              >
                送信
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Container>
  )
}

export default HooksForm
