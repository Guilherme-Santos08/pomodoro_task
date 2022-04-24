import { createContext, ReactNode, useEffect, useMemo, useState } from 'react'

type props = {
  children: ReactNode
}

type timeContextType = {
  minutes: number
  seconds: number
  countRest: number
  maxRest: number
  mode: string
  activePomodoro: boolean
  handleResetPomodoro: () => void
  handleStartAndPause: () => void
}

export const TimeContext = createContext({} as timeContextType)

// eslint-disable-next-line no-undef
let countdownTimeout: NodeJS.Timeout

export function TimeContextProvider({ children }: props) {
  const pomodoroTime = 0.1
  const restTime = 0.2
  const restLongTime = 0.3
  const maxRest = 4

  const [secondsAmount, setSecondsAmount] = useState(pomodoroTime * 60)
  const [mode, setMode] = useState('Foco')
  const [countRest, setCountRest] = useState(3)

  const [activePomodoro, setActivePomodoro] = useState(false)
  const minutes = Math.floor(secondsAmount / 60)
  const seconds = secondsAmount % 60

  const configPomodoro = (modePomodoro: string, timer: number) => {
    setMode(modePomodoro)
    setSecondsAmount(timer * 60)
    setActivePomodoro(false)
  }

  const configResetPomodoro = (timer: number) => {
    setSecondsAmount(timer * 60)
    setActivePomodoro(false)
    clearTimeout(countdownTimeout)
  }

  const notificationPomodoro = (title: string, body: string) => {
    if (Notification.permission === 'granted') {
      const notification = new Notification(title, {
        body,
        silent: false,
      })
      return notification
    }
    return false
  }

  const handleResetPomodoro = () => {
    new Audio('/mouse_click.mp3').play()
    switch (mode) {
      case 'Foco':
        configResetPomodoro(pomodoroTime)
        break

      case 'Descanso':
        configResetPomodoro(restTime)
        break

      case 'Descanso longo':
        configResetPomodoro(restLongTime)
        break

      default:
        break
    }
  }

  const handleStartAndPause = () => {
    new Audio('/mouse_click.mp3').play()
    setActivePomodoro(!activePomodoro)
  }

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  useEffect(() => {
    if (secondsAmount === 0) {
      new Audio('/digital_clock.mp3').play()

      switch (mode) {
        case 'Foco':
          setCountRest((state) => state + 1)
          if (countRest >= maxRest - 1) {
            configPomodoro('Descanso longo', restLongTime)
            notificationPomodoro(
              'Descanço Longo',
              'Vamos fazer uma pausa longa?'
            )
          } else {
            configPomodoro('Descanso', restTime)
            notificationPomodoro('Descanço', 'Vamos fazer uma pequena pausa?')
          }
          break

        case 'Descanso':
          configPomodoro('Foco', pomodoroTime)
          notificationPomodoro('Foco', 'Hora de focar')
          break

        case 'Descanso longo':
          configPomodoro('Foco', pomodoroTime)
          setCountRest(0)
          notificationPomodoro('Foco', 'Hora de focar')
          break

        default:
          break
      }
    }

    if (activePomodoro && secondsAmount > 0) {
      countdownTimeout = setTimeout(() => {
        setSecondsAmount((state) => state - 1)
      }, 1000)
    }
  }, [secondsAmount, activePomodoro])

  const value = useMemo(
    () => ({
      minutes,
      seconds,
      mode,
      maxRest,
      countRest,
      handleResetPomodoro,
      handleStartAndPause,
      activePomodoro,
    }),
    [minutes, seconds, handleResetPomodoro, handleStartAndPause, activePomodoro]
  )

  return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>
}
