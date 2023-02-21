import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import * as s from './styles'

export function Profile() {
  return (
    <s.ProfileContainer>
      <img src="https://github.com/gcarniel.png" alt="" />
      <s.Bio>
        <s.Title>
          <h1>Gabriel Carniel</h1>
          <a
            href="https://github.com/gcarniel"
            target={'_blank'}
            referrerPolicy="no-referrer"
          >
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </s.Title>
        <s.Description>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            accusamus voluptas, accusantium dolor debitis quisquam expedita ea
            quaerat aperiam, itaque, eveniet exercitationem doloribus quam
            repudiandae suscipit. Minima ea explicabo doloribus.
          </p>
          <div>
            <span>
              <FontAwesomeIcon size="1x" icon={faGithub} />
              gcarniel
            </span>
            <span>
              <FontAwesomeIcon size="1x" icon={faBuilding} />
              Empresa
            </span>
            <span>
              <FontAwesomeIcon size="1x" icon={faUserGroup} />
              <span>2 Seguidores</span>
            </span>
          </div>
        </s.Description>
      </s.Bio>
    </s.ProfileContainer>
  )
}
