import styled from 'styled-components'

export const TitleBar = styled.div`
  background-color: var(--color-sidebar);
  color: var(--color-blue);
  height: 80px;
  padding: 15px 30px;
  & h1 {
    font-size: 24px;
    line-height: 28px;
  }
`
export const Breadcrumb = styled.ul`
  padding: 8px 0;
  list-style: none;
  margin: 0 auto;
  & li {
    display: inline;
    font-size: 16px;
  }
  & li + li:before {
    color: var(--color-font);
  }
  & li a {
    color: var(--color-blue);
    text-decoration: none;
    padding: 8px;
    border-radius: 5px;
  }
  & li {
    color: var(--color-font);
  }
  & li a:hover {
    background-color: var(--color-sidebar-hover);
    text-decoration: none;
  }
`
