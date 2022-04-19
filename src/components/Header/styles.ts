import styled from 'styled-components'

export const Container = styled.header`
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;

    > p {
      font-size: 1.7rem;
      font-weight: bold;
    }

    .header__user {
      display: flex;
      align-items: flex-start;
      button {
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.gray12};
        margin-right: 1.5rem;
        background-color: transparent;
      }
      &--info {
        width: 35px;
        height: 35px;

        img {
          border-radius: 999px;
        }
      }
    }
  }
`
