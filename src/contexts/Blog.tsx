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
  fetchPost: (postNumber: number) => Promise<void>
  posts: Posts
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogProvider({ children }: BlogProps) {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState<Posts>({
    items: [],
    total_count: 0,
  })

  const fetchUser = async () => {
    const response = await api.get('/users/gcarniel')
    console.log(response)
    setUser(response.data)
  }

  const fetchPosts = async (searchText?: string) => {
    const query = searchText
      ? `${searchText}%20repo:gcarniel/ignite-03-desafio-github-blog`
      : 'repo:gcarniel/ignite-03-desafio-github-blog'
    const response = await api.get('/search/issues', {
      params: {
        q: query,
      },
    })

    console.log(response.data)
    setPosts(response.data)
  }

  const fetchPost = async (postNumber: number) => {
    const response = await api.get(
      '/repos/gcarniel/ignite-03-desafio-github-blog/issues/' + postNumber,
    )
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
        posts,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
