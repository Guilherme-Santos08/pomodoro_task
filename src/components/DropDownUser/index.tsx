/* eslint-disable @next/next/no-img-element */
import { FiRefreshCw, FiUser, FiXCircle } from 'react-icons/fi'

import {
  Box,
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  IconButton,
} from './styles'

export function DropdownMenuDemo() {
  return (
    <Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Customise options">
            <img
              src="https://avatars.githubusercontent.com/u/68301964?v=4"
              alt="Foto do usuario"
            />
          </IconButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuLabel>Guilherme Ribeiro</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <FiUser size={18} />
            <span>Meu perfil</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FiRefreshCw size={18} />
            <span>Atualizações</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FiXCircle size={18} />
            <span>Sair da Aplicação</span>
          </DropdownMenuItem>

          <DropdownMenuArrow offset={12} />
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  )
}

export default DropdownMenuDemo
