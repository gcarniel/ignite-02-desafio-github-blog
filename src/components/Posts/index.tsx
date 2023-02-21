import { Navigate, useNavigate } from 'react-router-dom'
import { useBlog } from '../../hooks/useBlog'
import * as s from './styles'

const MAX_LENGTH = 250

export function Posts() {
  const { posts } = useBlog()
  const navigate = useNavigate()
  const transformPostContent = (content: string) => {
    if (content.length < MAX_LENGTH) return content

    return `${content.slice(0, MAX_LENGTH)} ...`
  }

  const handleClickPost = (postNumber: number) => {
    navigate(`/${postNumber}`)
  }

  return (
    <s.PostsContainer>
      {posts.items?.map((post) => {
        return (
          <s.PostWrapper
            key={post.number}
            onClick={() => handleClickPost(post.number)}
          >
            <s.Header>
              <h1>{post.title}</h1>
              <span>Há 1 dia</span>
            </s.Header>
            <p>{transformPostContent(post.body)}</p>
          </s.PostWrapper>
        )
      })}
    </s.PostsContainer>
  )
}
