import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  padding: 15px;
  & th {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid var(--color-grey);
    background-color: var(--color-background);
  }
  & tr:nth-child(even) {
    background-color: var(--color-background);
  }
  & td {
    padding: 8px;
  }
`
