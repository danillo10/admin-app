import styled from 'styled-components'

export const Login = styled.section`
  display: flex;
  height: 100vh;
`

export const Image = styled.div`
  background-image: url('/edificio.jpg');
  background-repeat: no-repeat;
  background-position: left center;
  background-size: auto 100%;
  flex: 2;
`

export const Form = styled.div`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-sidebar);
  width: 100%;
  color: var(--color-white);
  & img {
    width: 150px;
    margin: 40px;
  }
  & h1 {
    text-align: start;
    width: 100%;
    padding: 0 15px;
    font-size: 32px;
  }
  & form {
    width: inherit;
    padding: 15px;
  }
  & button {
    width: 100%;
    margin: 32px 0;
  }
  & a {
    text-decoration: none;
    color: var(--color-blue);
    font-size: 18px;
  }
`
