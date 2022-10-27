import { Message } from './styled'

const Component = ({ formMessages, alert }) => {
  return formMessages && <Message className={alert}>{formMessages}</Message>
}

export default Component
