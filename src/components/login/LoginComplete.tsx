import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'src/context/UserContext'

const LoginComplete = () => {
  const navigate = useNavigate()
  const { user, isLoading } = useUser()

  useEffect(() => {
    if (!user) {
      return navigate('/login')
    }
  }, [])

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
          <Box>{user?.loginedCheck}</Box>
          <Box>
            <Button type="submit" fullWidth variant="outlined">
              ログアウト
            </Button>
          </Box>
        </Stack>
      </Box>
    </Container>
  )
}

export default LoginComplete
