import { Box, Button, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useForm } from 'react-hook-form'
import LoginCheckBox from 'src/components/login/LoginCheckBox'
import LoginTextField from 'src/components/login/LoginTextField'

type LoginForm = {
  name: string
  password: string
  loginedCheck: boolean
}

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<LoginForm>({})
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
