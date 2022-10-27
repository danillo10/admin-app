import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { setErrors } from 'utils'
import { handleAdminRecoverPassword } from 'services/api/admin'
import Input from 'components/Form/LabelInput'
import BtnBlue from 'components/Button/BtnBlue'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'

const Page = () => {
  const history = useHistory()
  const params = useParams()

  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const formik = useFormik({
    initialValues: { password: '', password_confirmation: '' },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () =>
      handleAdminRecoverPassword(params.token, formik.values)
        .then(() => history.push('/login'))
        .catch((error) =>
          setMessages({ messages: setErrors(error), alert: 'alert-orange' })
        )
  })

  return (
    <>
      <h1>Esqueci a senha</h1>
      <form onSubmit={formik.handleSubmit}>
        <Messages formMessages={messages.messages} alert={messages.alert} />
        <Input type="password" name="password" label="Senha" formik={formik} />
        <Input
          type="password"
          name="password_confirmation"
          label="Confirmar senha"
          formik={formik}
        />
        <BtnBlue type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? <Spinner /> : 'Entrar'}
        </BtnBlue>
      </form>
    </>
  )
}

export default Page
