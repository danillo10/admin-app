import styled from 'styled-components'

export const Spinner = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 24px;
  height: 24px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid var(--color-blue);
  border-radius: 50%;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
