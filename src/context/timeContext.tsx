import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'

type props = {
  children: ReactNode
}

type timeContextType = {
  minutes: number
  seconds: number
  activePomodoro: boolean
  handleResetPomodoro: () => void
  handleStartAndPause: () => void
}

export const TimeContext = createContext({} as timeContextType)

// eslint-disable-next-line no-undef
let countdownTimeout: NodeJS.Timeout
const TESTE = 25 * 60

export function TimeContextProvider({ children }: props) {
  const [secondsAmount, setSecondsAmount] = useState(TESTE)
  const [activePomodoro, setActivePomodoro] = useState(false)
  const minutes = Math.floor(secondsAmount / 60)
  const seconds = secondsAmount % 60

  useEffect(() => {
    if (secondsAmount === 0) {
      alert('chegou')
    }
    if (activePomodoro && secondsAmount > 0) {
      countdownTimeout = setTimeout(() => {
        setSecondsAmount((state) => state - 1)
      }, 1000)
    }
  }, [secondsAmount, activePomodoro])

  const handleResetPomodoro = () => {
    clearTimeout(countdownTimeout)
    setSecondsAmount(25 * 60)
    setActivePomodoro(false)
  }

  const handleStartAndPause = () => {
    setActivePomodoro(!activePomodoro)
  }

  const value = useMemo(
    () => ({
      minutes,
      seconds,
      handleResetPomodoro,
      handleStartAndPause,
      activePomodoro,
    }),
    [minutes, seconds, handleResetPomodoro, handleStartAndPause, activePomodoro]
  )

  return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>
}
