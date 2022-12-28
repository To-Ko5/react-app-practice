import { Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useForm } from 'react-hook-form'

const SearchApp = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<{ search: string }>({})

  return (
    <>
      <Container maxWidth="md" sx={{ mt: 6, mx: 'auto' }}>
        <Box width="400px" mx={'auto'}>
          <Box mb={5}>
            <TextField
              label="検索"
              type="text"
              {...register('search', {
                required: '必須入力',
                maxLength: {
                  value: 20,
                  message: '最大20文字です'
                }
              })}
              error={errors.search ? true : false}
              helperText={errors.search?.message as string}
              fullWidth
            />
          </Box>

          <Box>
            <Typography component="p" textAlign="center" mb={5}>
              検索結果
            </Typography>
            <Box>dddddd</Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default SearchApp
