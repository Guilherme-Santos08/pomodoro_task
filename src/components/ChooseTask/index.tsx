import { FiMenu } from 'react-icons/fi'
import { Task } from '../Task'
import {
  Box,
  IconButton,
  ChooseTaskContent,
  ChooseTaskMenu,
  ChooseTaskTrigger,
  ChooseTaskArrow,
} from './styles'

export function ChooseTask() {
  return (
    <Box>
      <ChooseTaskMenu>
        <ChooseTaskTrigger asChild>
          <IconButton aria-label="Customise options">
            <FiMenu color="#fff" size={20} />
          </IconButton>
        </ChooseTaskTrigger>

        <ChooseTaskContent alignOffset={-75} align="center">
          <Task />
          {/* <ChooseTaskArrow /> */}
        </ChooseTaskContent>
      </ChooseTaskMenu>
    </Box>
  )
}
