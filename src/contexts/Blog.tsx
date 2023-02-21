import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface BlogProps {
  children: ReactNode
}

interface BlogContextType {
  user: any
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProps) {
  const [user, setUser] = useState({})

  const fetchUser = async () => {
    const response = await api.get('/users/gcarniel')
    console.log(response)
    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])
  return (
    <BlogContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
