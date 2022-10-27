import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Sidebar = styled.section`
  background-color: var(--color-sidebar);
  transition: all ease 0.2s;
  z-index: 1;
  max-width: 240px;
  &.open {
    min-width: 240px;
  }
  &.closed {
    min-width: 80px;
  }
  & a {
    text-decoration: none;
  }
  @media (max-width: 1140px) {
    height: 100%;
    position: fixed;
    &.menu-closed {
      transform: translateX(-100%);
    }
    &.menu-open {
      transform: translateX(0);
    }
  }
`
export const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
export const SidebarBrand = styled.div`
  transition: all ease 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--color-sidebar-hover);
  height: 60px;
  &.open {
    min-width: 240px;
  }
  &.closed {
    min-width: 80px;
  }
  & .icone {
    width: 50px;
  }
  &.open img.logo {
    height: 40px;
  }
  &.open img.logo-mini {
    display: none;
  }
  &.closed img.logo {
    display: none;
  }
  &.closed img.logo-mini {
    width: 60px;
  }
  &.open p {
    color: var(--color-yellow);
    font-size: 28px;
    padding-left: 12px;
    font-weight: 600;
  }
  &.closed p {
    display: none;
  }
`
export const User = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 30px 0;
  transition: all ease 0.2s;
  &:hover {
    background-color: var(--color-sidebar-hover);
    cursor: pointer;
  }
  & img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  & div.open {
    padding-left: 12px;
  }
  & div.closed {
    display: none;
  }
`
export const Name = styled.p`
  font-size: 16px;
  color: var(--color-white);
`
export const Email = styled.p`
  font-size: 12px;
  color: #95a3b6;
  font-weight: 600;
`
