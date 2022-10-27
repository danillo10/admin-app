import { BtnBlue } from './styled'

const Component = (props) => {
  return <BtnBlue type={props.type}>{props.children}</BtnBlue>
}

export default Component
