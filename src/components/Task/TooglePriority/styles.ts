import { blackA } from '@radix-ui/colors'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import styled from 'styled-components'

export const ToggleGroup = styled(ToggleGroupPrimitive.Root)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 0.5rem;
  padding: 0.75rem;
  background-color: ${(props) => props.theme.colors.gray7};

  box-shadow: 0 2px 10px ${blackA.blackA7};
  border-radius: 8px;
  /* border: 2px solid ${(props) => props.theme.colors.gray9}; */
`

export const ToggleGroupItem = styled(ToggleGroupPrimitive.Item)`
  all: unset;
  font-size: 14px;
  line-height: 1;
  color: ${(props) => props.theme.colors.gray12};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.gray9};
  max-width: 96px;
  width: 100%;
  height: 28px;
  margin-left: 1px;

  border-radius: 8px;
  transition: background 0.2s;

  /* &:first-child {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  } */

  &:hover {
    background-color: ${(props) => props.theme.colors.gray8};
  }
  &[data-state='on'] {
    &.green {
      background-color: ${(props) => props.theme.colors.green7};
      border: 1px solid ${(props) => props.theme.colors.green10};
    }
    &.yellow {
      background-color: ${(props) => props.theme.colors.yellow7};
      border: 1px solid ${(props) => props.theme.colors.yellow10};
    }
    &.red {
      background-color: ${(props) => props.theme.colors.red7};
      border: 1px solid ${(props) => props.theme.colors.red10};
    }
  }
  &:focus {
    position: relative;
    box-shadow: 0 0 0 2px black;
  }
`
