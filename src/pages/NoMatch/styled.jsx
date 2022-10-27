import styled from 'styled-components'

export const Page404 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: var(--color-font);
  }
  & img {
    padding: 50px;
    width: 240px;
  }
`
