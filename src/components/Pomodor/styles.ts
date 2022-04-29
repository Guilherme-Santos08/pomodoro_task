import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 400px;
  /* height: 250px; */

  margin-top: 6rem;
  /* padding: 1rem; */
  background-color: ${(props) => props.theme.colors.gray5};
  border-radius: 8px;

  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    height: 30px;
    padding: 1.85rem;
    border-bottom: 1px solid green;

    > p {
      font-size: 1rem;
    }

    div {
      font-size: 0.9rem;
      text-align: center;
      line-height: 16px;
    }
  }

  .separetor {
    margin-top: 0.75rem;
    p {
      font-family: 'Rajdhani', sans-serif;
      font-size: 1.4rem;
    }
  }

  .count {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0 1.5rem;

    &__info {
      time {
        letter-spacing: 4px;
        font-size: 3.5rem;
        font-family: 'Rajdhani', sans-serif;

        display: block;
        min-width: 150px !important;
      }
    }

    &__buttons {
      display: flex;
      align-items: flex-end;

      button + button {
        margin-left: 0.75rem;
      }
    }
  }
`

type ButtonProps = {
  skip?: boolean
}

export const Button = styled.button<ButtonProps>`
  color: #fff;
  padding: 0.75rem 0;
  width: 150px;
  background-color: ${(props) => props.theme.colors.indigo9};
  border-radius: 8px;
  /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  border: none;
  box-shadow: ${(props) => props.theme.colors.indigo8} 0px 6px 0px;
  transition: background 0.2s, color 0.5s ease-in-out 0s;
  &:hover {
    background-color: ${(props) => props.theme.colors.indigo10};
  }
  &.pomodoro-active {
    transform: translateY(6px);
    box-shadow: none;
  }

  ${({ skip }) =>
    skip === true &&
    css`
      font-size: 1.5rem;
      color: #ffffff;

      width: auto;
      background-color: transparent;
      padding: 0;

      opacity: 0;
      visibility: hidden;
      box-shadow: none;

      &.show-skip {
        opacity: 1;
        visibility: visible;
      }

      &:hover {
        background-color: transparent;
      }
    `}
`
