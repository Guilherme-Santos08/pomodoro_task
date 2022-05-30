/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import usePersistedState from '../../hooks/usePersistedState'
import { SelectInterval } from './SelectConfig/SelectInterval'
import { SelectPriority } from './SelectConfig/SelectPriority'
import { TooglePriority } from './TooglePriority'

import { Container, RenderCreateTasks, RenderTasks } from './styles'

type timerConfigProps = {
  id: string
  taskValue: string
  priorityTask: string
  timeFocus: string
  shortBreak: string
  longBreak: string
  timeTaken: string
  intervalMinimumTask: string
  intervalTask: string
}

export function Task() {
  const [changeTask, setChangeTask] = useState(true)
  const [configStorage, setConfigStorage] = usePersistedState<
    timerConfigProps[]
  >('configPomodoro', [])

  const [timerConfig, setTimerConfig] = useState({
    id: uuidv4(),
    taskValue: '...',
    priorityTask: 'down',
    timeFocus: '25',
    shortBreak: '5',
    longBreak: '15',
    timeTaken: '0',
    intervalMinimumTask: '1',
    intervalTask: '4',
  })

  const handleChangeComponente = () => {
    setChangeTask(!changeTask)
  }

  const handleConfigPomodoro = (time: string, type: string) => {
    const newTest = {
      ...timerConfig,
      [type]: time,
      id: uuidv4(),
    }
    setTimerConfig(newTest)
  }

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleConfigPomodoro(event.target.value, 'taskValue')
  }

  const saveConfigPomodoro = () => {
    const newTask = [...configStorage, timerConfig]
    setConfigStorage(newTask)
    handleChangeComponente()
  }

  return (
    <Container>
      <h2>{changeTask ? 'Criar Tarefa' : 'Tarefas'}</h2>
      {changeTask ? (
        <RenderTasks>
          <h3>Todas</h3>
          <ul>
            {configStorage.map((config) => (
              <li className="task" key={config.id}>
                <div className={`task__priority ${config.priorityTask}`} />

                <div className="task__pomodoro">
                  <div className="task__pomodoro--info">
                    <p title="Constuir o pomodoro">{config.taskValue}</p>
                    <span>{config.timeFocus} minutos</span>
                  </div>

                  <div className="task__pomodoro--interval">
                    <p>
                      {config.intervalMinimumTask}/{config.intervalTask}
                    </p>
                    <p>{config.timeTaken} min</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <button type="button" onClick={handleChangeComponente}>
            Adicionar nova tarefa
          </button>
        </RenderTasks>
      ) : (
        <RenderCreateTasks>
          <div className="input-box">
            <label htmlFor="taskValue" className="sr-only">
              Nome da tarefa
            </label>
            <input
              id="taskValue"
              name="taskValue"
              type="text"
              placeholder="Criar uma Tarefa"
              defaultValue=""
              autoComplete="off"
              onChange={onInputChange}
              required
            />
          </div>

          <div className="priority">
            <h3>Prioridade da tarefa</h3>
            <TooglePriority
              defaultValue="down"
              onValueChange={(event) =>
                handleConfigPomodoro(event, 'priorityTask')
              }
            />
          </div>

          <div className="settings">
            <h3>Configuração do Pomodoro</h3>
            <div>
              <p>Tempo de foco</p>
              <SelectPriority
                defaultValue="25"
                onValueChange={(event) =>
                  handleConfigPomodoro(event, 'timeFocus')
                }
              />
            </div>

            <div>
              <p>Pausa curta</p>
              <SelectPriority
                defaultValue="5"
                onValueChange={(event) =>
                  handleConfigPomodoro(event, 'shortBreak')
                }
              />
            </div>

            <div>
              <p>Pausa longa</p>
              <SelectPriority
                defaultValue="15"
                onValueChange={(event) =>
                  handleConfigPomodoro(event, 'longBreak')
                }
              />
            </div>

            <div>
              <p>Sessões</p>
              <SelectInterval
                defaultValue="4"
                onValueChange={(event) =>
                  handleConfigPomodoro(event, 'intervalTask')
                }
              />
            </div>
          </div>

          <div className="btns">
            <button type="button" onClick={handleChangeComponente}>
              Cacelar
            </button>
            <button type="button" onClick={saveConfigPomodoro} className="save">
              Salvar
            </button>
          </div>
        </RenderCreateTasks>
      )}
    </Container>
  )
}
