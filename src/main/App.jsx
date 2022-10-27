import { BrowserRouter, Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import GlobalStyle from 'main/GlobalStyle'
import Public from 'components/Routes/Public'
import Private from 'components/Routes/Private'
import Template from 'components/Template'
import TemplateLogin from 'components/TemplateLogin'

import ContextProvider from 'contexts/context'

const Login = loadable(() => import('pages/Login'))
const ForgotPassword = loadable(() => import('pages/ForgotPassword'))
const RecoverPassword = loadable(() => import('pages/RecoverPassword'))

const Profile = loadable(() => import('pages/Profile'))

const Index = loadable(() => import('pages/Index'))

const Admin = loadable(() => import('pages/Admin'))
const AdminStore = loadable(() => import('pages/AdminStore'))
const AdminUpdate = loadable(() => import('pages/AdminUpdate'))

const FirmsUpdate = loadable(() => import('pages/FirmsUpdate'))
const FirmsStore = loadable(() => import('pages/FirmsStore'))
const Firms = loadable(() => import('pages/Firms'))

const Users = loadable(() => import('pages/Users'))
const UsersStore = loadable(() => import('pages/UsersStore'))
const UsersUpdate = loadable(() => import('pages/UsersUpdate'))

const Accounts = loadable(() => import('pages/Accounts'))
const AccountsStore = loadable(() => import('pages/AccountsStore'))
const AccountsUpdate = loadable(() => import('pages/AccountsUpdate'))

const NoMatch = loadable(() => import('pages/NoMatch'))

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ContextProvider>
        <BrowserRouter>
          <Switch>
            <Public
              path="/login"
              component={TemplateLogin(Login)}
              redirect="/"
            />
            <Public
              path="/esqueci-senha"
              component={TemplateLogin(ForgotPassword)}
              redirect="/"
            />
            <Public
              path="/recuperar-senha/:token"
              component={TemplateLogin(RecoverPassword)}
              redirect="/"
            />

            <Private
              path="/profile"
              component={Template(Profile)}
              redirect="/login"
            />

            <Private
              path="/admin/:id/editar"
              component={Template(AdminUpdate)}
              redirect="/login"
            />
            <Private
              path="/admin/cadastrar"
              component={Template(AdminStore)}
              redirect="/login"
            />
            <Private
              path="/admin"
              component={Template(Admin)}
              redirect="/login"
            />

            <Private
              path="/empresas/:id/contas/:account_id/editar"
              component={Template(AccountsUpdate)}
              redirect="/login"
            />
            <Private
              path="/empresas/:id/usuarios/:user_id/editar"
              component={Template(UsersUpdate)}
              redirect="/login"
            />

            <Private
              path="/empresas/:id/contas/cadastrar"
              component={Template(AccountsStore)}
              redirect="/login"
            />
            <Private
              path="/empresas/:id/usuarios/cadastrar"
              component={Template(UsersStore)}
              redirect="/login"
            />

            <Private
              path="/empresas/:id/contas"
              component={Template(Accounts)}
              redirect="/login"
            />
            <Private
              path="/empresas/:id/usuarios"
              component={Template(Users)}
              redirect="/login"
            />

            <Private
              path="/empresas/:id/editar"
              component={Template(FirmsUpdate)}
              redirect="/login"
            />
            <Private
              path="/empresas/cadastrar"
              component={Template(FirmsStore)}
              redirect="/login"
            />
            <Private
              path="/empresas"
              component={Template(Firms)}
              redirect="/login"
            />

            <Private path="/" component={Index} redirect="/login" />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </>
  )
}

export default App
