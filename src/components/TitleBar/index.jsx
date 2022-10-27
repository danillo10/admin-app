import { Link } from 'react-router-dom'
import { Breadcrumb, TitleBar } from './styled'

const Component = (props) => {
  return (
    <TitleBar>
      <h1>{props.label}</h1>
      <Breadcrumb>
        {props.breadcrumb &&
          props.breadcrumb.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.label}</Link>/
            </li>
          ))}
        <li>{props.currentPage}</li>
      </Breadcrumb>
    </TitleBar>
  )
}

export default Component
