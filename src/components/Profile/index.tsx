import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import * as s from './styles'
import { useUser } from '../../hooks/useUser'

export function Profile() {
  const { user } = useUser()

  return (
    <s.ProfileContainer>
      <img src={user?.avatar_url} alt="" />
      <s.Bio>
        <s.Title>
          <h1>{user?.name}</h1>
          <a
            href={user?.html_url}
            target={'_blank'}
            referrerPolicy="no-referrer"
          >
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </s.Title>
        <s.Description>
          <p>{user?.bio}</p>
          <div>
            <span>
              <FontAwesomeIcon size="1x" icon={faGithub} />
              {user?.login}
            </span>
            <span>
              <FontAwesomeIcon size="1x" icon={faBuilding} />
              {user?.company || user?.login}
            </span>
            <span>
              <FontAwesomeIcon size="1x" icon={faUserGroup} />
              <span>{user?.followers} Seguidores</span>
            </span>
          </div>
        </s.Description>
      </s.Bio>
    </s.ProfileContainer>
  )
}
