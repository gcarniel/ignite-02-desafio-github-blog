import * as s from './styles'

import logo from '../../assets/logo.svg'
export function Header() {
  return (
    <s.HeaderContainer>
      <img src={logo} alt="" />
    </s.HeaderContainer>
  )
}
