import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors.gray5};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
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
`
