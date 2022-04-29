import Link from 'next/link'
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
            {/* <button type="button">Resetar Sessão</button> */}
            <DropdownMenuDemo />
          </div>
        </div>
      </header>
    </Container>
  )
}
