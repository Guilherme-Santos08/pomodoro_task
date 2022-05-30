import { ToggleGroup, ToggleGroupItem } from './styles'

type TooglePriorityProps = {
  // eslint-disable-next-line no-unused-vars
  onValueChange(value: string): void
  defaultValue: string
}
export function TooglePriority({
  defaultValue,
  onValueChange,
}: TooglePriorityProps) {
  return (
    <ToggleGroup
      type="single"
      defaultValue={defaultValue}
      onValueChange={onValueChange}
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
