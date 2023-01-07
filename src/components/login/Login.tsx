import { Box, Button, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import LoginCheckBox from 'src/components/login/LoginCheckBox'
import LoginRadioButton from 'src/components/login/LoginRadioButton'
import LoginSelectBox from 'src/components/login/LoginSelectBox'
import LoginTextField from 'src/components/login/LoginTextField'
import { useUser } from 'src/context/UserContext'
import { User } from 'src/types/user'

const Login = () => {
  const navigate = useNavigate()
  const { user, setUser, isLoading } = useUser()

  const methods = useForm<User>({})
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    formState: { errors, isSubmitting }
  } = methods

  useEffect(() => {
    const getUser = localStorage.getItem('user')
    if (getUser) {
      const user = JSON.parse(getUser)
      reset(user)
    } else {
      setValue('gender', 0)
    }
  }, [])

  const onSubmit = useCallback(
    (data: User) => {
      setUser(data)
      if (data.loginedCheck) {
        localStorage.setItem('user', JSON.stringify(data))
      } else {
        localStorage.removeItem('user')
      }
      navigate('/login-complete')
    },
    [user]
  )

  return (
    <>
      <FormProvider {...methods}>
        <Container maxWidth="md">
          <Box maxWidth="600px" mx="0 auto" mt={10} boxShadow={4} p={4}>
            <Stack
              component="form"
              spacing={4}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Typography component="p" fontSize={20}>
                ログイン
              </Typography>
              <Box>
                <LoginTextField type="name" />
              </Box>
              <Box>
                <LoginTextField type="password" />
              </Box>
              <Box>
                <LoginSelectBox />
              </Box>
              <Box>
                <LoginRadioButton />
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
      </FormProvider>
    </>
  )
}

export default Login
