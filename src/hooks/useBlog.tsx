import { useContext } from 'react'
import { BlogContext } from '../contexts/Blog'

export function useBlog() {
  const { fetchPost, posts, fetchPosts } = useContext(BlogContext)
  return {
    fetchPost,
    posts,
    fetchPosts,
  }
}
