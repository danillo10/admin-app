import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Standart = styled.button`
  color: var(--color-white);
  border-radius: 5px;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`

export const Button = styled(Standart)`
  padding: 8px 12px;
`

export const BtnBlue = styled(Button)`
  background-color: var(--color-blue);
`
export const BtnRed = styled(Button)`
  background-color: var(--color-red);
`
export const BtnWhite = styled(Button)`
  background-color: var(--color-white);
  color: var(--color-font);
`

export const StandartLink = styled(Link)`
  color: var(--color-white);
  border-radius: 5px;
  border: none;
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  &:focus {
    outline: 0;
  }
`
export const LinkButton = styled(StandartLink)`
  padding: 8px 12px;
  text-decoration: none;
`
export const SmallLink = styled(StandartLink)`
  padding: 4px 8px;
`
export const LinkBlue = styled(LinkButton)`
  background-color: var(--color-blue);
`
export const SmLinkGreen = styled(SmallLink)`
  background-color: var(--color-green);
`

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`
