import { useContext } from 'react'
import { BlogContext } from '../contexts/Blog'

export function useUser() {
  const props = useContext(BlogContext)
  return { ...props }
}
