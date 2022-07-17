import { Icon, IconButton } from '@chakra-ui/react'
import { FiSkipForward } from 'react-icons/fi'

type ButtonSkipProps = {
  activePomodoro: boolean
  handleSkipMode?: () => void
}

export function ButtonSkip({
  activePomodoro,
  handleSkipMode,
}: ButtonSkipProps) {
  return (
    <IconButton
      fontSize="1.5rem"
      color="white"
      position="absolute"
      right="-3rem"
      bottom="0"
      width="auto"
      bg="transparent"
      p="0"
      opacity={1}
      visibility="visible"
      boxShadow="visible"
      _hover={{
        bg: 'transparent',
      }}
      onClick={handleSkipMode}
      aria-label="Pular sessão de pomodoro"
      icon={<Icon as={FiSkipForward} />}
    />
  )
}
