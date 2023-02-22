import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'

import * as s from './styles'
import { formatDate } from '../../helpers/formatterDate'

interface PostTitleProps {
  title: string
  user: any
  date: Date
  comments: number
  link: string
}
export function PostTitle({
  title,
  user,
  date,
  comments,
  link,
}: PostTitleProps) {
  return (
    <s.PostTitleContainer>
      <s.Links>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </NavLink>
        <NavLink to={link} target={'_blank'} referrerPolicy="no-referrer">
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </NavLink>
      </s.Links>
      <s.Title>
        <h1>{title}</h1>
      </s.Title>
      <s.Info>
        <div>
          <span>
            <FontAwesomeIcon size="1x" icon={faGithub} />
            {user?.login}
          </span>
          <span>
            <FontAwesomeIcon size="1x" icon={faCalendarDay} />
            {formatDate(date)}
          </span>
          <span>
            <FontAwesomeIcon size="1x" icon={faComment} />
            <span>{comments} Comentários</span>
          </span>
        </div>
      </s.Info>
    </s.PostTitleContainer>
  )
}
