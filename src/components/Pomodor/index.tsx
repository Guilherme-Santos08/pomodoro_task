import Head from 'next/head'
import { FiSkipForward } from 'react-icons/fi'
import { useTime } from '../../hooks/useTime'
import { Button, Container } from './styles'

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
      <Container>
        <div className="info">
          <p>Construindo Pomodoro</p>

          <div>
            <p>
              {countRest}/{maxRest}
            </p>
          </div>
        </div>

        <div className="separetor">
          <p>{mode}</p>
        </div>

        <div className="count">
          <div className="count__info">
            <time>{timer}</time>
          </div>
          <div className="count__buttons">
            <Button
              className={activePomodoro ? 'pomodoro-active' : ''}
              type="button"
              onClick={
                activePomodoro ? handleResetPomodoro : handleStartAndStop
              }
            >
              {activePomodoro ? 'Parar' : 'Iniciar'}
            </Button>
            <Button
              skip
              type="button"
              className={activePomodoro ? 'show-skip' : ''}
              onClick={handleSkipMode}
            >
              <FiSkipForward />
            </Button>
          </div>
        </div>
      </Container>
    </>
  )
}
