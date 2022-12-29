import { Container, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useCallback, useEffect, useRef, useState } from 'react'
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
  const [searchQuery, setSearchQuery] = useState<[]>([])

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const getUsers = async () => {
      const response = await fetch(url).then((res) => res.json())
      if (response.length) {
        setUsers(response)
      }
    }
    getUsers()
  }, [])

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value

      const newUsers = users
      const query: any = newUsers.filter((user: any) => {
        return user.name.toLowerCase().includes(value)
      })
      setSearchQuery(query)
    },
    [users]
  )

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
              onChange={(e) => handleSearch(e)}
            />
          </Box>

          <Box>
            <Typography component="p" textAlign="center" mb={5}>
              検索結果
            </Typography>
            <Box>
              {searchQuery.map((user: any) => {
                return <Box key={user.id}>{user.name}</Box>
              })}
            </Box>
            <hr />
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
