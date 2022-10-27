import { Link } from 'react-router-dom'
import { Page404 } from './styled'

const Page = () => {
  return (
    <Page404>
      <Link to="/dashboard">
        <img src="/bi4all.png" alt="analyticdbi" />
        <h1>Página não encontrada</h1>
      </Link>
    </Page404>
  )
}

export default Page
