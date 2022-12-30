import { Box, Button, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import LoginCheckBox from 'src/components/login/LoginCheckBox'
import LoginTextField from 'src/components/login/LoginTextField'

const Login = () => {
  return (
    <>
      <Container maxWidth="md">
        <Box maxWidth="600px" mx="0 auto" mt={10} boxShadow={4} p={4}>
          <Stack spacing={4}>
            <Typography component="p" fontSize={20}>
              ログイン
            </Typography>
            <Box>
              <LoginTextField />
            </Box>
            <Box>
              <LoginTextField />
            </Box>
            <Box>
              <LoginCheckBox />
            </Box>
            <Box>
              <Button fullWidth variant="contained">
                ログイン
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </>
  )
}

export default Login
