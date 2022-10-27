import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { setErrors } from 'utils'
import {
  handleUser,
  handleUpdateUser,
  handleDeleteUser
} from 'services/api/users'
import { handleFirm } from 'services/api/firms'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Input from 'components/Form/LabelInput'
import BtnBlue from 'components/Button/BtnBlue'
import BtnRed from 'components/Button/BtnRed'
import BtnBox from 'components/Button/BtnBox'
import BtnWhite from 'components/Button/BtnWhite'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import Modal from 'components/Modal'
import Table from 'components/Table'

const Page = () => {
  const history = useHistory()
  const params = useParams()
  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const [firm, setFirm] = useState({})
  const [data, setData] = useState({})
  const [visibleModal, setVisibleModal] = useState(false)

  useEffect(() => {
    handleUser(params.user_id).then((res) => setData(res))
    handleFirm(params.id).then((res) => setFirm(res))
  }, [params.id, params.user_id])

  const formik = useFormik({
    initialValues: { name: data.name, email: data.email },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () =>
      handleUpdateUser(params, formik.values)
        .then(() => history.push(`/empresas/${params.id}/usuarios`))
        .catch((error) =>
          setMessages({ messages: setErrors(error), alert: 'alert-orange' })
        ),
    enableReinitialize: true
  })

  const handleDelete = () =>
    handleDeleteUser(params)
      .then(() => history.push(`/empresas/${params.id}/usuarios`))
      .catch(() =>
        setMessages({
          messages: 'Erro ao excluir usuário',
          alert: 'alert-orange'
        })
      )

  const breadcrumb = [
    { path: '/empresas', label: 'Index' },
    { path: `/empresas/${params.id}/usuarios`, label: 'Usuários' }
  ]

  return (
    <>
      <TitleBar label="Empresas" currentPage="Editar" breadcrumb={breadcrumb} />
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
          <CardTitle title="Editar usuário">
            <BtnRed onClick={() => setVisibleModal(true)}>Excluir</BtnRed>
          </CardTitle>
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
      <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal}>
        <Card>
          <Content>
            <Content>
              <p>Deseja excluir esse item?</p>
              <BtnBox>
                <BtnRed onClick={handleDelete}>Excluir</BtnRed>
                <BtnWhite onClick={() => setVisibleModal(false)}>
                  Cancelar
                </BtnWhite>
              </BtnBox>
            </Content>
          </Content>
        </Card>
      </Modal>
    </>
  )
}

export default Page
