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

export const ChooseTaskContent = styled(DropdownMenuPrimitive.Content)`
  min-width: 220px;
  height: 100%;
  margin-top: 0.5rem;
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

export const ChooseTaskArrow = styled(DropdownMenuPrimitive.Arrow)`
  fill: ${(props) => props.theme.colors.gray3};
`

export const ChooseTaskMenu = styled(DropdownMenuPrimitive.Root)``
export const ChooseTaskTrigger = styled(DropdownMenuPrimitive.Trigger)``
