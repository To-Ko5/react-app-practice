import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { User } from 'src/types/user'

type ContextType = {
  isLoading: boolean
  user: User | null | undefined
  setUser: React.Dispatch<React.SetStateAction<User | null | undefined>>
}

const UserContext = createContext<ContextType>({
  isLoading: true,
  user: null,
  setUser: () => {}
})

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUser = localStorage.getItem('user')
    if (getUser) {
      setUser(JSON.parse(getUser))
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        isLoading,
        user,
        setUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
