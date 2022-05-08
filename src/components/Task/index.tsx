import { useState } from 'react'
import { Container, RenderCreateTasks, RenderTasks } from './styles'

export function Task() {
  const [changeTask, setChangeTask] = useState(false)

  const handleChangeComponente = () => {
    setChangeTask(!changeTask)
  }
  return (
    <Container>
      <h2>{changeTask ? 'Criar Tarefa' : 'Tarefas'}</h2>
      {changeTask ? (
        <RenderTasks>
          <h3
          // style={
          //   changeTask
          //     ? { opacity: 0, visibility: 'hidden' }
          //     : { opacity: 1, visibility: 'visible' }
          // }
          >
            Todas
          </h3>
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
      ) : (
        <RenderCreateTasks>Teste</RenderCreateTasks>
      )}

      <button type="button" onClick={handleChangeComponente}>
        Adicionar nova tarefa
      </button>
    </Container>
  )
}
