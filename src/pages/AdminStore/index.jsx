import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { setErrors } from 'utils'
import { handleStoreAdmin } from 'services/api/admin'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Input from 'components/Form/LabelInput'
import BtnBlue from 'components/Button/BtnBlue'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'

const Page = () => {
  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const history = useHistory()
  const formik = useFormik({
    initialValues: { name: '', email: '' },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () =>
      handleStoreAdmin(formik.values)
        .then(() => history.push('/admin'))
        .catch((error) =>
          setMessages({ messages: setErrors(error), alert: 'alert-orange' })
        )
  })

  const breadcrumb = [{ path: '/admin', label: 'Index' }]

  return (
    <>
      <TitleBar label="Admin" currentPage="Cadastrar" breadcrumb={breadcrumb} />
      <Content>
        <Card>
          <CardTitle title="Cadastrar"></CardTitle>
          <Content>
            <form onSubmit={formik.handleSubmit}>
              <Messages
                formMessages={messages.messages}
                alert={messages.alert}
              />
              <Input name="name" label="Nome" formik={formik} />
              <Input name="email" label="Email" formik={formik} />
              <BtnBlue type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? <Spinner /> : 'Enviar'}
              </BtnBlue>
            </form>
          </Content>
        </Card>
      </Content>
    </>
  )
}

export default Page
