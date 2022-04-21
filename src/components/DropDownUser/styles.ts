/* eslint-disable no-unused-vars */
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'

import styled, { keyframes } from 'styled-components'

const slideUpAndFade = keyframes`
  0% { opacit: 0; transform: translateY(2px); }
  100% { opacity: 1; transform: translateY(0); }
`

const slideRightAndFade = keyframes`
  0% { opacity: 0; transform: translateX(-2px); }
  100% { opacity: 1; transform: translateX(0); }
`

const slideDownAndFade = keyframes`
  0%: { opacity: 0; transform: translateY(-2px); }
  100%: { opacity: 1; transform: translateY(0); }
`

const slideLeftAndFade = keyframes`
  0%: { opacity: 0, transform: translateX(2px) }
  100%: { opacity: 1, transform: translateX(0) }
`
export const Box = styled.div``

export const IconButton = styled.button`
  all: unset;
  font-family: inherit;
  height: 44px;
  width: 44px;
  border-radius: 6px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 99rem;
  transition: 0.2s;
  box-shadow: 0 2px 10px black;

  img {
    border: 2px solid ${(props) => props.theme.colors.indigo11};
    border-radius: 99rem;
  }
`

export const DropdownMenuContent = styled(DropdownMenuPrimitive.Content)`
  min-width: 220px;
  background-color: ${(props) => props.theme.colors.gray5};
  border-radius: 6px;
  padding: 5px;
  /* box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2); */

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    animation-fill-mode: forwards;
    will-change: transform, opacity;

    &[data-state='open'] {
      &[data-side='top'] {
        animation-name: ${slideDownAndFade};
      }
      &[data-side='right'] {
        animation-name: ${slideLeftAndFade};
      }
      &[data-side='bottom'] {
        animation-name: ${slideUpAndFade};
      }
      &[data-side='left'] {
        animation-name: ${slideRightAndFade};
      }
    }
  }
`

export const DropdownMenuItem = styled(DropdownMenuPrimitive.Item)`
  all: unset;
  font-size: 15px;
  line-height: 1px;
  color: #fff;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 7px 0;
  position: relative;
  padding-left: 25px;
  padding-right: 25px;
  user-select: none;
  transition: background 0.2s, color 0.2s;

  svg,
  path {
    color: ${(props) => props.theme.colors.indigo11};
  }

  span {
    margin-left: 1rem;
  }

  &[data-disabled] {
    color: red;
    pointer-events: none;
  }

  &:focus {
    background-color: ${(props) => props.theme.colors.gray3};
    color: ${(props) => props.theme.colors.gray12};
  }
`

export const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label)`
  padding: 8px 0;
  padding-left: 25px;
  font-size: 13px;
  line-height: 25px;
  color: ${(props) => props.theme.colors.gray12};
`

export const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator)`
  height: 1px;
  background-color: ${(props) => props.theme.colors.gray7};
  margin: 5px;
`

export const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow)`
  fill: ${(props) => props.theme.colors.gray3};
`

export const DropdownMenu = styled(DropdownMenuPrimitive.Root)``
export const DropdownMenuTrigger = styled(DropdownMenuPrimitive.Trigger)``
