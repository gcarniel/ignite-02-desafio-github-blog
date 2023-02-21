import { useForm } from 'react-hook-form'
import { Posts } from '../../components/Posts'
import { Profile } from '../../components/Profile'
import * as s from './styles'

export function PageHome() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const handleSubmitForm = () => {}
  return (
    <s.HomeContainer>
      <Profile />
      <s.Content>
        <div>
          <span>Publicações</span>
          <span>6 Publicações</span>
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
