import Link from 'next/link'
import { ChooseTask } from '../ChooseTask'
import DropdownMenuDemo from '../DropDownUser'

import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <header>
        <div>
          <Link href="/">
            <a>DzPomo</a>
          </Link>

          <div className="header__user">
            <ChooseTask />
            {/* <button type="button">Resetar Sessão</button> */}
            <DropdownMenuDemo />
          </div>
        </div>
      </header>
    </Container>
  )
}
