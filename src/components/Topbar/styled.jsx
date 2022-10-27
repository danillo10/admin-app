import styled from 'styled-components'

export const TopbarMenu = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`
export const Topbar = styled.header`
  height: 60px;
  width: 100%;
  background-color: var(--color-sidebar);
  border-bottom: 1px solid var(--color-sidebar-hover);
  display: flex;
  justify-content: space-between;
  z-index: 1;
  @media (max-width: 1140px) {
    position: fixed;
  }
`
export const TopbarMenuDesktop = styled(TopbarMenu)`
  transition: all ease 0.2s;
  & span {
    color: var(--color-font);
  }
  @media (max-width: 1140px) {
    & {
      display: none;
    }
  }
`
export const TopbarMenuMobile = styled(TopbarMenu)`
  transition: all ease 0.2s;
  &.menu-open {
    margin-left: 240px;
  }
  @media (max-width: 2562px) {
    & {
      display: none;
    }
  }
  @media (max-width: 1140px) {
    & {
      display: flex;
    }
  }
`
export const Logout = styled.div`
  color: var(--color-font);
  width: 50px;
  & p {
    line-height: 60px;
    margin: 0;
    text-align: center;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`
