import { Button } from '@chakra-ui/react'

type ButtonStartAndStopProps = {
  activePomodoro: boolean
  handleResetPomodoro?: () => void
  handleStartAndStop?: () => void
}

export function ButtonStartAndStop({
  activePomodoro,
  handleResetPomodoro,
  handleStartAndStop,
}: ButtonStartAndStopProps) {
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
