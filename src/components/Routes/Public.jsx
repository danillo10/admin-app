import { Route, Redirect, BrowserRouter } from 'react-router-dom'
import { userAuthenticated } from 'services/auth'

const Component = ({ component: Component, redirect, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        !userAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={redirect} />
        )
      }
    />
)

export default Component
