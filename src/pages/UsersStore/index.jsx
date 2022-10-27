import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { setErrors } from 'utils'
import { handleStoreUser } from 'services/api/users'
import { handleFirm } from 'services/api/firms'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Input from 'components/Form/LabelInput'
import BtnBlue from 'components/Button/BtnBlue'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import Table from 'components/Table'

const Page = () => {
  const [firm, setFirm] = useState({})
  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const history = useHistory()
  const params = useParams()

  useEffect(() => {
    handleFirm(params.id).then((res) => setFirm(res))
  }, [params.id])

  const formik = useFormik({
    initialValues: { name: '', email: '' },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () =>
      handleStoreUser(formik.values, params)
        .then(() => history.push(`/empresas/${params.id}/usuarios`))
        .catch((error) =>
          setMessages({ messages: setErrors(error), alert: 'alert-orange' })
        )
  })

  const breadcrumb = [
    { path: '/empresas', label: 'Index' },
    { path: `/empresas/${params.id}/usuarios`, label: 'Usuários' }
  ]

  return (
    <>
      <TitleBar
        label="Empresas"
        currentPage="Cadastrar"
        breadcrumb={breadcrumb}
      />
      <Content>
        <Card>
          <CardTitle title="Empresa" />
          <Table>
            <thead>
              <tr>
                <th>Razão Social</th>
                <th>Nome Fantasia</th>
                <th>CNPJ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{firm.name}</td>
                <td>{firm.market_name}</td>
                <td>{firm.cnpj}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Card>
          <CardTitle title="Cadastrar usuário"></CardTitle>
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
