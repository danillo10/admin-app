import { CardTitle } from './styled'

const Component = (props) => {
  return (
    <CardTitle>
      <p>{props.title}</p>
      <div>{props.children}</div>
    </CardTitle>
  )
}

export default Component
