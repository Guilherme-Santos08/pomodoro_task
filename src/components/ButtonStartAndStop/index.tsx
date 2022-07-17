import { Button, Icon, IconButton } from '@chakra-ui/react'
import { FiSkipForward } from 'react-icons/fi'

type ButtonStartAndStopProps = {
  activePomodoro: boolean
  handleResetPomodoro?: () => void
  handleStartAndStop?: () => void
  skip: boolean
  handleSkipMode?: () => void
}

export function ButtonStartAndStop({
  activePomodoro,
  handleResetPomodoro,
  handleStartAndStop,
  skip,
  handleSkipMode,
}: ButtonStartAndStopProps) {
  if (skip) {
    return (
      <IconButton
        fontSize="1.5rem"
        color="white"
        position="absolute"
        right="-2.2rem"
        bottom="0"
        width="auto"
        bg="transparent"
        p="0"
        opacity={activePomodoro ? '0' : '1'}
        visibility={activePomodoro ? 'visible' : 'hidden'}
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
  return (
    <Button
      color="white"
      py="0.75rem"
      w="150px"
      bg="#3e63dd"
      borderRadius="8px"
      boxShadow={activePomodoro ? 'none' : '#2f4eb2 0px 6px 0px'}
      height="100%"
      transition="background 0.2s, color 0.5s ease-in-out 0s"
      translateY={`${activePomodoro && 'translateY(6px)'}`}
      _hover={{
        bg: '#4668d6',
      }}
      onClick={activePomodoro ? handleResetPomodoro : handleStartAndStop}
    >
      {activePomodoro ? 'Parar' : 'Iniciar'}
    </Button>
  )
}
