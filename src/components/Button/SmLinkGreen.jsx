import { SmLinkGreen } from './styled'

const Component = (props) => {
  return <SmLinkGreen to={props.to}>{props.children}</SmLinkGreen>
}

export default Component
