import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { setErrors } from 'utils'
import { handleAdminForgotPassword } from 'services/api/admin'
import Input from 'components/Form/LabelInput'
import BtnBlue from 'components/Button/BtnBlue'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'

const Page = () => {
  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () =>
      handleAdminForgotPassword(formik.values)
        .then((res) =>
          setMessages({ messages: res.data.data.message, alert: 'alert-green' })
        )
        .catch((error) =>
          setMessages({ messages: setErrors(error), alert: 'alert-orange' })
        )
  })

  return (
    <>
      <h1>Esqueci a senha</h1>
      <form onSubmit={formik.handleSubmit}>
        <Messages formMessages={messages.messages} alert={messages.alert} />
        <Input type="email" name="email" label="Email" formik={formik} />
        <BtnBlue type="submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? <Spinner /> : 'Entrar'}
        </BtnBlue>
      </form>
    </>
  )
}

export default Page
