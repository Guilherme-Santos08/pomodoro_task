import { Container, RenderTasks } from './styles'

export function Task() {
  return (
    <Container>
      <h2>Tarefas</h2>
      <RenderTasks>
        <h3>Todas</h3>
        <div className="task">
          <div className="task__priority" />

          <div className="task__info">
            <p title="Constuir o pomodoro">Construir o Pomodoro</p>
            <span>30 minutos</span>
          </div>

          <div className="task__pomodoro">
            <div className="task__pomodoro--info">
              <p>1/4</p>
              <p>25 min</p>
            </div>
            {/* <button type="button">{'|>'}</button> */}
          </div>
        </div>
      </RenderTasks>
    </Container>
  )
}
