/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import { SelectInterval } from './SelectConfig/SelectInterval'
import { SelectPriority } from './SelectConfig/SelectPriority'
import { Container, RenderCreateTasks, RenderTasks } from './styles'
import { TooglePriority } from './TooglePriority'

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
          <button type="button" onClick={handleChangeComponente}>
            Adicionar nova tarefa
          </button>
        </RenderTasks>
      ) : (
        <RenderCreateTasks>
          <div className="input-box">
            <label htmlFor="taskName" className="sr-only">
              Nome da tarefa
            </label>
            <input
              id="taskName"
              type="text"
              placeholder="Criar uma Tarefa"
              required
            />
          </div>

          <div className="priority">
            <h3>Prioridade da tarefa</h3>
            <TooglePriority />
          </div>

          <div className="settings">
            <h3>Configuração do Pomodoro</h3>
            <div>
              <p>Tempo de foco</p>
              <SelectPriority defaultValue="25" />
            </div>

            <div>
              <p>Pausa curta</p>
              <SelectPriority defaultValue="5" />
            </div>

            <div>
              <p>Pausa longa</p>
              <SelectPriority defaultValue="15" />
            </div>

            <div>
              <p>Sessões</p>
              <SelectInterval />
            </div>
          </div>

          <div className="btns">
            <button type="button" onClick={handleChangeComponente}>
              Cacelar
            </button>
            <button
              type="button"
              onClick={handleChangeComponente}
              className="save"
            >
              Salvar
            </button>
          </div>
        </RenderCreateTasks>
      )}
    </Container>
  )
}
