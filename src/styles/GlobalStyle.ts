import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem 'Inter', sans-serif;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  img {
    width: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${(props) => props.theme.colors.indigo1};
    color: ${(props) => props.theme.colors.gray12};
    font-size: 16px;
    /* 62.5% */
  }

  main {
    display: flex;
    justify-content: space-between;
    max-width: 1300px;
    width: 100%;
    margin: 2rem auto 0;
    padding: 1rem;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    border: 0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 0.9375 * 16px = 15px;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 0.875 * 16px = 14px;
    }
  }
`
