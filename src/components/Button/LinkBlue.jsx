import { LinkBlue } from './styled'

const Component = (props) => {
  return <LinkBlue to={props.to}>{props.children}</LinkBlue>
}

export default Component
