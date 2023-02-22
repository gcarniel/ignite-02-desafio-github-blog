import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
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
          date={post.created_at}
          comments={post.comments}
          link={post.html_url}
        />
      )}
      <s.PostBody>
        {post.body && (
          <p>
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </p>
        )}
      </s.PostBody>
    </s.PostContainer>
  )
}
