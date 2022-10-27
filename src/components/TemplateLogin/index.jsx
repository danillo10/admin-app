import { Login, Image, Form } from './styled'

const Base = (ChildrenComponent) => {
  const ComponentBase = (props) => {
    return (
      <Login>
        <Image />
        <Form>
          {/* <img src="/bi4all.png" alt="analyticdbi" /> */}
          <ChildrenComponent {...props} />
        </Form>
      </Login>
    )
  }

  return ComponentBase
}

export default Base
