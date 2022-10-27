import { CardTitle } from './styled'

const Component = (props) => {
  return (
    <CardTitle>
      <div>{props.children}</div>
    </CardTitle>
  )
}

export default Component
