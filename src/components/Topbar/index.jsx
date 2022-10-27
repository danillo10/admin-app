import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Topbar, TopbarMenuDesktop, TopbarMenuMobile, Logout } from './styled'
import { FaBars } from 'react-icons/fa'
import { Context } from 'contexts/context'
import { logout } from 'services/auth'

const Component = () => {
  const history = useHistory()
  const { toggle, setToggle } = useContext(Context)

  return (
    <Topbar>
      <TopbarMenuDesktop onClick={() => setToggle(!toggle)}>
        <span>
          <FaBars />
        </span>
      </TopbarMenuDesktop>
      <TopbarMenuMobile
        onClick={() => setToggle(!toggle)}
        className={toggle ? 'menu-open' : 'menu-closed'}
      >
        <span>
          <FaBars />
        </span>
      </TopbarMenuMobile>
      <Logout onClick={() => logout(history)}>
        <p>Sair</p>
      </Logout>
    </Topbar>
  )
}

export default Component
