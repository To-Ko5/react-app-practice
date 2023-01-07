import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from 'src/context/UserContext'

const LoginComplete = () => {
  const navigate = useNavigate()
  const { user, isLoading } = useUser()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [])

  return <div>{user && user.name}</div>
}

export default LoginComplete
