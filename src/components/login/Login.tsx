import { Box, Button, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useForm } from 'react-hook-form'
import LoginCheckBox from 'src/components/login/LoginCheckBox'
import LoginSelectBox from 'src/components/login/LoginSelectBox'
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

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <>
      <Container maxWidth="md">
        <Box maxWidth="600px" mx="0 auto" mt={10} boxShadow={4} p={4}>
          <Stack component="form" spacing={4} onSubmit={handleSubmit(onSubmit)}>
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
              <LoginSelectBox />
            </Box>
            <Box>
              <LoginCheckBox />
            </Box>
            <Box>
              <Button type="submit" fullWidth variant="contained">
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
