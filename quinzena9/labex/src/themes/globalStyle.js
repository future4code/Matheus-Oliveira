import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open-Sans, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }

  h1 {
    color: slategray;
  }

  h3 {
    color: slategray;
  }

  button {
    margin-bottom: 15px;
    height: 40px;
    padding: 0px 20px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 16px;
    background-color: slategray;
    min-width: 100px;

    &:hover {
      cursor: pointer;
      background-color: #B6D4E3;
    }
  }

  input {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0px 0px 15px;
  }

  select {
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0px 0px 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    width: 500px;
  }
`

export default GlobalStyle