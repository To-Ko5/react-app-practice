import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'src/context/UserContext'

const LoginComplete = () => {
  const navigate = useNavigate()
  const { user, isLoading, setUser } = useUser()

  useEffect(() => {
    if (!user) {
      return navigate('/login')
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    const getUser = localStorage.getItem('user')
    if (getUser) {
      localStorage.removeItem('user')
    }
    navigate('/login')
  }, [user])

  return (
    <Container maxWidth="md">
      <Box maxWidth="600px" mx="0 auto" mt={10} boxShadow={4} p={4}>
        <Stack component="form" spacing={4}>
          <Typography component="p" fontSize={20}>
            ユーザー情報
          </Typography>
          <Box>{user?.name}</Box>
          <Box>{user?.password}</Box>
          <Box>{user?.age}</Box>
          <Box>{user?.gender}</Box>
          <Box>{user?.loginedCheck ? 'true' : 'false'}</Box>
          <Box>
            <Button type="submit" fullWidth variant="outlined" onClick={logout}>
              ログアウト
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}

export default LoginComplete
