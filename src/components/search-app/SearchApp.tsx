import { Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
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

  const [users, setUsers] = useState<[]>([])

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const getUsers = async () => {
      const response = await fetch(url).then((res) => res.json())
      if (response) {
        setUsers(response)
      }
      console.log(users)
    }
    getUsers()
  }, [])

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
            <Box>
              {users.map((user: any) => {
                return <Box key={user.id}>{user.name}</Box>
              })}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default SearchApp
