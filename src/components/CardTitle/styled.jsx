import styled from 'styled-components'

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--color-sidebar-hover);
  color: var(--color-font);
  & p {
    padding: 15px;
    flex-grow: 1;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
  }
  & div {
    padding: 15px;
  }
  @media (max-width: 1140px) {
    & {
      flex-direction: column;
    }
  }
`
