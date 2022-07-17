import { Box, Flex, Text } from '@chakra-ui/react'
import Head from 'next/head'

import { useTime } from '../../hooks/useTime'
import { ButtonSkip } from '../ButtonsPomodoro/ButtonSkip'
import { ButtonStartAndStop } from '../ButtonsPomodoro/ButtonStartAndStop'

export function Pomodoro() {
  const {
    minutes,
    seconds,
    handleResetPomodoro,
    handleStartAndStop,
    handleSkipMode,
    activePomodoro,
    mode,
    countRest,
    maxRest,
  } = useTime()
  const timer = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
    2,
    '0'
  )}`

  return (
    <>
      <Head>
        <title>{`${timer} - ${mode}`}</title>
      </Head>
      <Flex
        alignItems="center"
        flexDir="column"
        w="400px"
        marginTop="6rem"
        borderRadius="8px"
        backgroundColor="gray.700"
        color="white"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          className="info"
          width="100%"
          height="30px"
          p="1.85rem"
          borderBottom="1px solid rgb(181 28 28 / 59%)"
        >
          <Text>Construindo Pomodoro</Text>

          <Box>
            <Text fontSize="0.9rem" textAlign="center" lineHeight="16px">
              {countRest}/{maxRest}
            </Text>
          </Box>
        </Flex>

        <Box mt="0.9rem">
          <Text fontSize="1.4rem" fontFamily="Rajdhani">
            {mode}
          </Text>
        </Box>

        <Flex
          flexDir="column"
          alignItems="center"
          pt="0.5rem"
          pb="1.5rem"
          px="1.5rem"
          className="count"
        >
          <Box>
            <Box
              as="time"
              letterSpacing="4px"
              fontSize="3.5rem"
              fontFamily="Rajdhani"
              display="block"
              minW="150px !important"
            >
              {timer}
            </Box>
          </Box>

          <Flex position="relative" alignItems="flex-end">
            <ButtonStartAndStop
              activePomodoro={activePomodoro}
              handleResetPomodoro={handleResetPomodoro}
              handleStartAndStop={handleStartAndStop}
            />
            {activePomodoro && (
              <ButtonSkip
                activePomodoro={activePomodoro}
                handleSkipMode={handleSkipMode}
              />
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
