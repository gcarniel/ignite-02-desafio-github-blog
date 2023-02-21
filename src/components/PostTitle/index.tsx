import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import * as s from './styles'
import { NavLink } from 'react-router-dom'
import { useUser } from '../../hooks/useUser'

export function PostTitle() {
  const { user } = useUser()
  return (
    <s.PostTitleContainer>
      <s.Links>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </NavLink>
        <NavLink
          to={user?.html_url}
          target={'_blank'}
          referrerPolicy="no-referrer"
        >
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </NavLink>
      </s.Links>
      <s.Title>
        <h1>JavaScript data types and data structures</h1>
      </s.Title>
      <s.Info>
        <div>
          <span>
            <FontAwesomeIcon size="1x" icon={faGithub} />
            gcarniel
          </span>
          <span>
            <FontAwesomeIcon size="1x" icon={faCalendarDay} />
            Há 1 dia
          </span>
          <span>
            <FontAwesomeIcon size="1x" icon={faComment} />
            <span>2 Comentários</span>
          </span>
        </div>
      </s.Info>
    </s.PostTitleContainer>
  )
}
