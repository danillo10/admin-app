import styled from 'styled-components'

export const MenuItem = styled.li`
  margin: 2px 15px;
  border-radius: 5px;
  transition: all ease 0.2s;
  &:hover {
    background-color: var(--color-sidebar-hover);
    cursor: pointer;
  }
  & a {
    display: flex;
    align-items: center;
    color: var(--color-white);
    text-decoration: none;
    padding: 12px 4px;
    border-radius: 5px;
    margin-bottom: 4px;
    font-size: 16px;
  }
  & a span {
    padding: 0 12px;
    font-size: 24px;
    color: var(--color-icons);
    display: flex;
  }
  &.open a p {
    margin: 0;
    color: var(--color-label);
  }
  &.closed a p {
    display: none;
  }
  & .active-menu {
    background-color: var(--color-sidebar-hover);
    color: var(--color-white);
  }
`
