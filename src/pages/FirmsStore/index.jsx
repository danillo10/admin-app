import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { handleStoreFirm } from 'services/api/firms'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Input from 'components/Form/LabelInput'
import InputMask from 'components/Form/LabelInputMask'
import BtnBlue from 'components/Button/BtnBlue'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import { cnpjMask } from 'utils'
import { setErrors } from 'utils'

const Page = () => {
  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const history = useHistory()
  const formik = useFormik({
    initialValues: { name: '', market_name: '', cnpj: '' },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () =>
      handleStoreFirm(formik.values)
        .then(() => history.push('/empresas'))
        .catch((error) =>
          setMessages({ messages: setErrors(error), alert: 'alert-orange' })
        )
  })

  const breadcrumb = [{ path: '/empresas', label: 'Index' }]

  return (
    <>
      <TitleBar
        label="Empresas"
        currentPage="Cadastrar"
        breadcrumb={breadcrumb}
      />
      <Content>
        <Card>
          <CardTitle title="Cadastrar"></CardTitle>
          <Content>
            <form onSubmit={formik.handleSubmit}>
              <Messages
                formMessages={messages.messages}
                alert={messages.alert}
              />
              <Input name="name" label="Razão Social" formik={formik} />
              <Input name="market_name" label="Nome Fantasia" formik={formik} />
              <InputMask
                name="cnpj"
                label="Cnpj"
                formik={formik}
                mask={cnpjMask}
              />
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
