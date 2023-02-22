import { useForm } from 'react-hook-form'
import { Posts } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import { useBlog } from '../../hooks/useBlog'
import * as s from './styles'

export function PageHome() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const { posts, fetchPosts } = useBlog()

  const handleSubmitForm = (data: any) => {
    fetchPosts(data.search)
  }
  return (
    <s.HomeContainer>
      <Profile />
      <s.Content>
        <div>
          <span>Publicações</span>
          <span>{posts.total_count} Publicações</span>
        </div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <input
            type="text"
            {...register('search')}
            placeholder="Buscar conteúdo"
          />
        </form>
      </s.Content>
      <Posts />
    </s.HomeContainer>
  )
}
