import DropdownMenuDemo from '../DropDownUser'

import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <div>
        <p>Pomodoro Dz</p>

        <div className="header__user">
          {/* <button type="button">Resetar Sessão</button> */}
          <DropdownMenuDemo />
        </div>
      </div>
    </Container>
  )
}
