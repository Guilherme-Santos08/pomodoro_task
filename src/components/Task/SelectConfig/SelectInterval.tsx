import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import {
  Box,
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from './styles'

type SelectIntervalProps = {
  // eslint-disable-next-line no-unused-vars
  onValueChange(value: string): void
  defaultValue: string
}

export function SelectInterval({
  defaultValue,
  onValueChange,
}: SelectIntervalProps) {
  return (
    <Box>
      <Select defaultValue={defaultValue} onValueChange={onValueChange}>
        <SelectTrigger
          aria-label="mudar prioridade da tarefa"
          className="interval"
        >
          <SelectValue />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>

        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>

          <SelectViewport>
            <SelectGroup>
              {/* <SelectLabel>Fruits</SelectLabel> */}
              <SelectItem value="1">
                <SelectItemText>1 Intervalo</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>

              <SelectItem value="2">
                <SelectItemText>2 Intervalo</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>

              <SelectItem value="3">
                <SelectItemText>3 Intervalo</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>

              <SelectItem value="4">
                <SelectItemText>4 Intervalo</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>

              <SelectItem value="5">
                <SelectItemText>5 Intervalo</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>

              <SelectItem value="6">
                <SelectItemText>6 Intervalo</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>

              <SelectItem value="7">
                <SelectItemText>7 Intervalo</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>

              <SelectItem value="8">
                <SelectItemText>8 Intervalo</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>

              <SelectItem value="9">
                <SelectItemText>9 Intervalo</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>

              <SelectItem value="10">
                <SelectItemText>10 Intervalo</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>
          </SelectViewport>

          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </Select>
    </Box>
  )
}
