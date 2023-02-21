import * as s from './styles'

const posts = [
  {
    id: '1',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam maiores facilis quaerat illo. Ipsum cumque blanditiis eaque illo obcaecati unde quos molestias doloribus voluptatem provident, dolor, id ut excepturi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam maiores facilis quaerat illo. Ipsum cumque blanditiis eaque illo obcaecati unde quos molestias doloribus voluptatem provident, dolor, id ut excepturi?',
  },
  {
    id: '2',
    title: 'titulo 2',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam maiores facilis quaerat illo. Ipsum cumque blanditiis eaque illo obcaecati unde quos molestias doloribus voluptatem provident, dolor, id ut excepturi?',
  },
  {
    id: '3',
    title: 'titulo 3',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam maiores facilis quaerat illo. Ipsum cumque blanditiis eaque illo obcaecati unde quos molestias doloribus voluptatem provident, dolor, id ut excepturi?',
  },
  {
    id: '4',
    title: 'titulo 4',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam maiores facilis quaerat illo. Ipsum cumque blanditiis eaque illo obcaecati unde quos molestias doloribus voluptatem provident, dolor, id ut excepturi?',
  },
  {
    id: '5',
    title: 'titulo 5',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam maiores facilis quaerat illo. Ipsum cumque blanditiis eaque illo obcaecati unde quos molestias doloribus voluptatem provident, dolor, id ut excepturi?',
  },
]

const MAX_LENGTH = 250

export function Posts() {
  const transformPostContent = (content: string) => {
    if (content.length < MAX_LENGTH) return content

    return `${content.slice(0, MAX_LENGTH)} ...`
  }

  return (
    <s.PostsContainer>
      {posts.map((post) => {
        return (
          <s.PostWrapper key={post.id}>
            <s.Header>
              <h1>{post.title}</h1>
              <span>Há 1 dia</span>
            </s.Header>
            <p>{transformPostContent(post.content)}</p>
          </s.PostWrapper>
        )
      })}
    </s.PostsContainer>
  )
}
