import styled, { css } from 'styled-components'

export const Container = styled.div`
  text-align: center;

  max-width: 720px;
  width: 100%;
  padding: 2rem;

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  /* 
  box-shadow: ${(props) => props.theme.colors.indigo11} -5px 5px,
    ${(props) => props.theme.colors.indigo10}-10px 10px,
    ${(props) => props.theme.colors.indigo9} -15px 15px; */

  @media (max-width: 1180px) {
    margin: 0 auto;
  }
`

export const Content = styled.div`
  margin-top: 4.75rem;

  div + div {
    margin-top: 4.75rem;
  }

  .count {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 260px;
    height: 260px;
    border-radius: 999px;
    margin: 0 auto;
    border: 1px solid ${(props) => props.theme.colors.gray4};

    &__time {
      margin: 2rem 0;
    }

    time {
      font-weight: bold;
      font-size: 2.1rem;
    }

    p {
      font-size: 1.1rem;
      font-weight: normal;
    }
  }

  @media (max-width: 1120px) {
    margin-top: 4rem;
  }

  @media (max-width: 600px) {
    margin-top: 2rem;

    .count {
      width: 220px;
      height: 220px;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    button + button {
      margin-left: 1.2rem;
    }
  }
`

type ButtonProps = {
  whatTheme: string
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

  ${({ whatTheme }) =>
    whatTheme === 'refresh' &&
    css`
      font-size: 1.5rem;
      background-color: transparent;
      box-shadow: none;
      width: auto;
      padding: 0;
      color: #ffffff;
      &:hover {
        background-color: transparent;
      }
    `}
`
