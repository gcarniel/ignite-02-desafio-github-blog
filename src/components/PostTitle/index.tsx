import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import * as s from './styles'

export function PostTitle() {
  return (
    <s.PostTitleContainer>
      <s.Links>
        <a href="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </a>
        <a
          href="https://github.com/gcarniel"
          target={'_blank'}
          referrerPolicy="no-referrer"
        >
          Ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
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
