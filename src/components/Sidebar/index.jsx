import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, Menu, SidebarBrand, User, Name, Email } from './styled'
import { FaUsers, FaIndustry } from 'react-icons/fa'
import MenuItem from 'components/MenuItem'
import { Context } from 'contexts/context'
import { getUser } from 'services/auth'

const menuItems = [
  { path: '/empresas', icon: <FaIndustry />, label: 'Empresas' },
  { path: '/admin', icon: <FaUsers />, label: 'Admin' }
]

const Component = () => {
  const { toggle } = useContext(Context)
  const [data, setData] = useState({})

  useEffect(() => {
    ;(async () => {
      setData(getUser().data)
    })()
  }, [])

  const { file_url, name, email } = data

  return (
    <Sidebar
      className={`
                ${toggle ? 'open' : 'closed'}
                ${toggle ? 'menu-open' : 'menu-closed'}
            `}
    >
      <Link to="/">
        <SidebarBrand className={toggle ? 'open' : 'closed'}>
          <img className="logo" src="/bi4all.png" alt="analyticdbi" />
          <img className="logo-mini" src="/bi4all.png" alt="analyticdbi" />
        </SidebarBrand>
      </Link>
      <User to="/profile">
        <img src={file_url ? file_url : '/user.svg'} alt="analyticdbi" />
        <div className={`${toggle ? 'open' : 'closed'}`}>
          <Name>{name}</Name>
          <Email>{email}</Email>
        </div>
      </User>
      <Menu>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            path={item.path}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </Menu>
    </Sidebar>
  )
}

export default Component
