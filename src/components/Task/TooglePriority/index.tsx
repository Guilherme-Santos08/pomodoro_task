import { ToggleGroup, ToggleGroupItem } from './styles'

export function TooglePriority() {
  return (
    <ToggleGroup
      type="single"
      defaultValue="down"
      aria-label="Selection prioridade de suas tarefas"
    >
      <ToggleGroupItem
        className="green"
        value="down"
        aria-label="Prioridade baixa"
      >
        Baixa
      </ToggleGroupItem>
      <ToggleGroupItem
        className="yellow"
        value="mid"
        aria-label="Prioridade média"
      >
        Media
      </ToggleGroupItem>
      <ToggleGroupItem className="red" value="up" aria-label="Prioridade Alta">
        Alta
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
