import { BtnWhite } from './styled'

const Component = (props) => {
  return <BtnWhite type={props.type}>{props.children}</BtnWhite>
}

export default Component
