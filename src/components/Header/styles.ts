import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0 0 0 1px hsl(243 4.9% 18.8%);

  header {
    /* max-width: 1300px; */
    width: 100%;
    margin: 0 auto;
    padding: 0 1.5rem;

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 80px;

      > a {
        font-size: 1.5rem;
        font-weight: normal;
      }

      .header__user {
        display: flex;
        align-items: flex-start;
        button {
          font-size: 1.2rem;
          color: ${(props) => props.theme.colors.gray12};
          /* margin-right: 1.5rem; */
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
  }
`
