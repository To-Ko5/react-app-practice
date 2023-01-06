import React from 'react'
import { useUser } from 'src/context/UserContext'

const LoginComplete = () => {
  const { user, isLoading } = useUser()

  return <div>{user && user.name}</div>
}

export default LoginComplete
