import * as SelectPrimitive from '@radix-ui/react-select'
import styled from 'styled-components'

export const SelectTrigger = styled(SelectPrimitive.SelectTrigger)`
  all: unset;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  font-size: 13px;
  line-height: 1;
  color: ${(props) => props.theme.colors.gray12};

  background-color: transparent;
  width: 64px;
  gap: 5px;

  cursor: pointer;

  &.interval {
    width: 92px;
  }
`

export const SelectContent = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background: ${(props) => props.theme.colors.gray3};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  top: 70px !important;
`

export const SelectViewport = styled(SelectPrimitive.Viewport)`
  padding: 5px;
`

export const SelectItem = styled(SelectPrimitive.Item)`
  all: unset;
  display: flex;
  align-items: center;
  position: relative;

  font-size: 13px;
  line-height: 1;
  color: ${(props) => props.theme.colors.gray12};

  height: 34px;
  padding: 0 35px 0 25px;

  user-select: none;
  border-radius: 3px;

  &[data-disabled] {
    color: ${(props) => props.theme.colors.mauve8};
    pointer-events: none;
  }

  &:focus {
    background: ${(props) => props.theme.colors.gray2};
    color: #ffffff;
  }
`

export const SelectLabel = styled(SelectPrimitive.Label)`
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
  color: ${(props) => props.theme.colors.mauve1};
`

export const SelectSeparator = styled(SelectPrimitive.Separator)`
  height: 1px;
  background-color: ${(props) => props.theme.colors.yellow10};
  margin: 5px;
`

export const SelectItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const SelectScrollUpButton = styled(SelectPrimitive.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background: ${(props) => props.theme.colors.gray1};
  color: ${(props) => props.theme.colors.gray12};

  cursor: default;
`

export const SelectScrollDownButton = styled(SelectPrimitive.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background: ${(props) => props.theme.colors.gray1};
  color: ${(props) => props.theme.colors.gray12};

  cursor: default;
`

export const Select = SelectPrimitive.Root
export const SelectValue = SelectPrimitive.Value
export const SelectIcon = SelectPrimitive.Icon
export const SelectGroup = SelectPrimitive.Group
export const SelectItemText = SelectPrimitive.ItemText
export const Box = styled.div``
