import Head from 'next/head'
import { useTime } from '../../hooks/useTime'
import { Button, Container, Content } from './styles'

export function Pomodoro() {
  const {
    minutes,
    seconds,
    handleResetPomodoro,
    handleStartAndPause,
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
      <div />
      <Container>
        <h1>Construindo Pomodoro</h1>
        <Content>
          <div className="count">
            <p>
              {countRest}/{maxRest}
            </p>
            <p className="count__time">
              <time>{timer}</time>
            </p>
            <p className="count__mode">{mode}</p>
          </div>

          <div className="buttons">
            <Button
              whatTheme=""
              type="button"
              onClick={
                activePomodoro ? handleResetPomodoro : handleStartAndPause
              }
            >
              {activePomodoro ? 'Parar' : 'Iniciar'}
            </Button>
          </div>
        </Content>
      </Container>
    </>
  )
}
