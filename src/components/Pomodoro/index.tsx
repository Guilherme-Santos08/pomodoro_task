import { Button, Container, Content } from './styles'

export function Pomodoro() {
  return (
    <Container>
      <h1>Construindo Pomodoro</h1>
      <Content>
        <div className="count">
          <p>1/4</p>
          <p>
            <time>24:59</time>
          </p>
          <p>Foco</p>
        </div>

        <div className="buttons">
          <Button type="button">Iniciar</Button>
        </div>
      </Content>
    </Container>
  )
}
