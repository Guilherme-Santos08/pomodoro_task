/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import usePersistedState from '../../hooks/usePersistedState'
import { SelectInterval } from './SelectConfig/SelectInterval'
import { SelectPriority } from './SelectConfig/SelectPriority'
import { TooglePriority } from './TooglePriority'

import { Container, RenderCreateTasks, RenderTasks } from './styles'

export function Task() {
  const [changeTask, setChangeTask] = useState(false)
  const [configStorage, setConfigStorage] = usePersistedState<unknown[]>(
    'configPomodoro',
    []
  )

  const [timerConfig, setTimerConfig] = useState({
    id: uuidv4(),
    priorityTask: 'down',
    timeFocus: '25',
    shortBreak: '5',
    longBreak: '15',
    intervalTask: '4',
  })
  const handleChangeComponente = () => {
    setChangeTask(!changeTask)
  }

  const handleConfigPomodoro = (time: string, type: string) => {
    switch (type) {
      case 'priorityTask':
        setTimerConfig((prevState) => ({
          ...prevState,
          priorityTask: time,
        }))
        break
      case 'timeFocus':
        setTimerConfig((prevState) => ({
          ...prevState,
          timeFocus: time,
        }))
        break
      case 'shortBreak':
        setTimerConfig((prevState) => ({
          ...prevState,
          shortBreak: time,
        }))
        break
      case 'longBreak':
        setTimerConfig((prevState) => ({
          ...prevState,
          longBreak: time,
        }))
        break
      case 'intervalTask':
        setTimerConfig((prevState) => ({
          ...prevState,
          intervalTask: time,
        }))
        break

      default:
        break
    }
  }

  const saveConfigPomodoro = () => {
    const newTask = [...configStorage, timerConfig]
    setConfigStorage(newTask)
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
