import { useContext } from 'react'
import { BlogContext } from '../contexts/Blog'

export function useUser() {
  const { user } = useContext(BlogContext)
  return { user }
}
