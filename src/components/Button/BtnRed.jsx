import { BtnRed } from './styled'

const Component = (props) => {
  return (
    <BtnRed type={props.type} onClick={props.onClick}>
      {props.children}
    </BtnRed>
  )
}

export default Component
