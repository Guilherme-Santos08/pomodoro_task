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

          <DropdownMenuItem>Meu perfil</DropdownMenuItem>
          <DropdownMenuItem>Atualizações</DropdownMenuItem>
          <DropdownMenuItem>Sair da Aplicação</DropdownMenuItem>

          <DropdownMenuArrow offset={12} />
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  )
}

export default DropdownMenuDemo
