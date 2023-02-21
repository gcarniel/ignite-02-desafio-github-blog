import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostTitle } from '../../components/PostTitle'
import { useBlog } from '../../hooks/useBlog'
import * as s from './styles'

export function PagePost() {
  const [post, setPost] = useState<any>({})
  const { postNumber } = useParams()
  const { fetchPost } = useBlog()

  const getPost = async () => {
    if (!postNumber) return
    const data = await fetchPost(postNumber)
    console.log(data)
    setPost(data)
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <s.PostContainer>
      {post.title && (
        <PostTitle
          title={post.title}
          user={post.user}
          date={post.updated_at}
          comments={post.comments}
        />
      )}
      <s.PostBody>{post.title && <p>{post.body}</p>}</s.PostBody>
    </s.PostContainer>
  )
}
