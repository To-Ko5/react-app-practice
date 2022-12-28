import { Container, TextField } from '@mui/material'
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
      <Container maxWidth="md" style={{ margin: '50px auto 0' }}>
        <Box width="400px" style={{ margin: '0 auto' }}>
          <Box>
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
            <Box>dddddd</Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default SearchApp
