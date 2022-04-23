import { FiRefreshCcw } from 'react-icons/fi'
import { useTime } from '../../hooks/useTime'
import { Button, Container, Content } from './styles'

export function Pomodoro() {
  const {
    minutes,
    seconds,
    handleResetPomodoro,
    handleStartAndPause,
    activePomodoro,
  } = useTime()
  return (
    <Container>
      <h1>Construindo Pomodoro</h1>
      <Content>
        <div className="count">
          <p>1/4</p>
          <p>
            <time>
              {String(minutes).padStart(2, '0')}:
              {String(seconds).padStart(2, '0')}
            </time>
          </p>
          <p>Foco</p>
        </div>

        <div className="buttons">
          <Button
            whatTheme="refresh"
            type="button"
            onClick={handleResetPomodoro}
          >
            <FiRefreshCcw />
          </Button>
          <Button whatTheme="" type="button" onClick={handleStartAndPause}>
            {activePomodoro ? 'Pausar' : 'Iniciar'}
          </Button>
        </div>
      </Content>
    </Container>
  )
}
