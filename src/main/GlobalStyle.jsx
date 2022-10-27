import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    /* --color-background: #f1f5f9; */
    --color-background: #181818;
    /* --color-font: #7B7A7B; */
    --color-font: #909090;
    --color-input: #C4C4C4;
    /* --color-background-card: #f6f6f6; */
    --color-background-card: #202020;
    /* --color-sidebar: #0f1729; */
    --color-sidebar: #202020;
    /* --color-sidebar-hover: #2c3343; */
    --color-sidebar-hover: #383838;
    --color-icons: #9fa2a9;
    --color-label: #cfd0d4;
    --color-black: #000;
    --color-white: #fff;
    --color-grey: #878b93;
    /* --color-blue: #474fdd; */
    --color-blue: #4ea6f9;
    --color-green: green;
    --color-orange: #E37C53;
    /* --color-red: #F04D51; */
    --color-red: #f23620;
    --color-yellow: #ebc212;
    --color-purple: #7f8ff1;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: var(--color-background);
    color: var(--color-black);
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`
export default GlobalStyle
