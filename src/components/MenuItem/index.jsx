import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuItem } from './styled'
import { Context } from 'contexts/context'

const Component = (props) => {
  const { toggle } = useContext(Context)

  return (
    <MenuItem className={toggle ? 'open' : 'closed'}>
      <NavLink to={props.path} activeClassName="active-menu">
        <span>{props.icon}</span>
        <p>{props.label}</p>
      </NavLink>
    </MenuItem>
  )
}

export default Component
