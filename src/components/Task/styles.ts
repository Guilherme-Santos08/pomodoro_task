import styled from 'styled-components'

export const Container = styled.div`
  min-width: 360px;
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors.gray5};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;

  @media (max-width: 380px) {
    min-width: 330px;
  }
`

export const RenderTasks = styled.div`
  margin-top: 2.5rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  .task {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.75rem;
    background-color: ${(props) => props.theme.colors.gray3};
    border-radius: 8px;
    border: 1px solid gray;

    &__priority {
      width: 30px;
      height: 30px;
      border: 2px solid hsl(356deg 83% 48%);
      border-radius: 99rem;
      background-color: rgb(181 28 28 / 39%);
    }

    &__info {
      width: 160px;
      margin: 0 1rem;
      line-height: 18px;
      p {
        font-size: 0.9rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      span {
        color: ${(props) => props.theme.colors.gray11};
        font-size: 0.8rem;
      }
    }

    &__pomodoro {
      color: ${(props) => props.theme.colors.gray11};
      &--info {
        font-size: 0.75rem;
        text-align: center;
        line-height: 16px;
      }
    }
  }

  > button {
    margin-top: 2rem;
    background-color: ${(props) => props.theme.colors.gray3};
    color: #ffffff;
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
    border: 1px #ffff dashed;
  }
`

export const RenderCreateTasks = styled.div`
  margin-top: 3rem;

  .input-box {
    input {
      width: 100%;
      padding: 1rem;
      color: ${(props) => props.theme.colors.gray12};
      background-color: ${(props) => props.theme.colors.gray7};

      border: 2px solid ${(props) => props.theme.colors.gray9};
      border-radius: 8px;
      outline: none;

      &::placeholder {
        color: ${(props) => props.theme.colors.gray11};
      }
    }
  }

  .priority {
    margin-top: 2rem;
  }

  .settings {
    margin-top: 2rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;
      padding: 1rem;
      margin-top: 0.5rem;

      color: ${(props) => props.theme.colors.gray12};
      background-color: ${(props) => props.theme.colors.gray7};

      border: 2px solid ${(props) => props.theme.colors.gray9};
      border-radius: 8px;

      p {
        font-size: 0.85rem;
      }
    }
  }

  .btns {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 2rem;

    button {
      color: #ffffff;
      font-weight: bold;
      padding: 0.5rem 1.5rem;
      background-color: transparent;
      border-radius: 8px;

      &.save {
        background-color: ${(props) => props.theme.colors.green6};
      }
    }
  }
`
