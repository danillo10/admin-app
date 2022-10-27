import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { handleAdminLogin } from 'services/api/admin'
import { Link } from 'react-router-dom'
import Input from 'components/Form/LabelInput'
import BtnBlue from 'components/Button/BtnBlue'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import { setErrors } from 'utils'
import { login } from 'services/auth'

const Page = () => {
  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const history = useHistory()
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () =>
      handleAdminLogin(formik.values)
        .then((res) => {
          login(res.data.token)
          return history.push(`/empresas`)
        })
        .catch((error) =>
          setMessages({ messages: setErrors(error), alert: 'alert-orange' })
        )
  })

  return (
    <>
      <h1>Entre com sua conta</h1>
      <form onSubmit={formik.handleSubmit}>
        <Messages formMessages={messages.messages} alert={messages.alert} />
        <Input type="email" name="email" label="Email" formik={formik} />
        <Input type="password" name="password" label="Senha" formik={formik} />
        <BtnBlue type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? <Spinner /> : 'Entrar'}
        </BtnBlue>
      </form>
      <Link to="/esqueci-senha">Esqueci a senha</Link>
    </>
  )
}

export default Page
