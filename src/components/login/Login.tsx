import { Box, Button, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { useCallback, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import LoginCheckBox from 'src/components/login/LoginCheckBox'
import LoginRadioButton from 'src/components/login/LoginRadioButton'
import LoginSelectBox from 'src/components/login/LoginSelectBox'
import LoginTextField from 'src/components/login/LoginTextField'
import { User } from 'src/types/user'

const Login = () => {
  const methods = useForm<User>({})
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors, isSubmitting }
  } = methods

  useEffect(() => {
    const getUser = localStorage.getItem('user')
    if (getUser) {
      const user = JSON.parse(getUser)
      console.log(user)
      reset(user)
    }
  }, [])

  const onSubmit = useCallback((data: User) => {
    console.log(data)
    localStorage.setItem('user', JSON.stringify(data))
  }, [])

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
