import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
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
        setSearchQuery(response)
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
        <Box width="800px" mx={'auto'}>
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
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="users table">
                  <TableHead>
                    <TableRow>
                      <TableCell>name</TableCell>
                      <TableCell align="right">username</TableCell>
                      <TableCell align="right">email</TableCell>
                      <TableCell align="right">address</TableCell>
                      <TableCell align="right">website</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {searchQuery.map((user: any) => (
                      <TableRow
                        key={user.name}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 }
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {user.name}
                        </TableCell>
                        <TableCell align="right">{user.username}</TableCell>
                        <TableCell align="right">{user.email}</TableCell>
                        <TableCell align="right">{user.address.city}</TableCell>
                        <TableCell align="right">{user.website}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <hr style={{ margin: '40px 0' }} />
              {searchQuery.map((user: any) => {
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
