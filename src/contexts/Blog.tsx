import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface BlogProps {
  children: ReactNode
}

interface Posts {
  items: any[]
  total_count: number
}

interface BlogContextType {
  user: any
  fetchPost: (postNumber: string) => Promise<void>
  fetchPosts: (searchText?: string) => Promise<void>
  posts: Posts
}

export const BlogContext = createContext({} as BlogContextType)

// const GITHUB_USER = 'rocketseat-education'
// const GITHUB_REPO = 'reactjs-github-blog-challenge'
const GITHUB_USER = 'gcarniel'
const GITHUB_REPO = 'ignite-03-desafio-github-blog'

export function BlogProvider({ children }: BlogProps) {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState<Posts>({
    items: [],
    total_count: 0,
  })

  const fetchUser = async () => {
    const response = await api.get(`/users/${GITHUB_USER}`)
    setUser(response.data)
  }

  const fetchPosts = async (searchText?: string) => {
    const query = searchText
      ? `${searchText}repo:${GITHUB_USER}/${GITHUB_REPO}`
      : `repo:${GITHUB_USER}/${GITHUB_REPO}`
    const response = await api.get('/search/issues', {
      params: {
        q: query,
      },
    })

    setPosts(response.data)
  }

  const fetchPost = async (postNumber: string) => {
    const response = await api.get(
      `/repos/${GITHUB_USER}/${GITHUB_REPO}/issues/${postNumber}`,
    )
    return response.data
  }

  useEffect(() => {
    fetchPosts()
    fetchUser()
  }, [])
  return (
    <BlogContext.Provider
      value={{
        user,
        fetchPost,
        fetchPosts,
        posts,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
