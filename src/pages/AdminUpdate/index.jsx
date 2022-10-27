import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import { setErrors } from 'utils'
import {
  handleAdminShow,
  handleUpdateAdmin,
  handleAdminDelete
} from 'services/api/admin'
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

const Page = () => {
  const history = useHistory()
  const params = useParams()
  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const [data, setData] = useState({})
  const [visibleModal, setVisibleModal] = useState(false)

  useEffect(() => {
    handleAdminShow(params.id).then((res) => setData(res))
  }, [params.id])

  const formik = useFormik({
    initialValues: { name: data.name, email: data.email },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () =>
      handleUpdateAdmin(params.id, formik.values)
        .then(() => history.push('/admin'))
        .catch((error) =>
          setMessages({ messages: setErrors(error), alert: 'alert-orange' })
        ),
    enableReinitialize: true
  })

  const handleDelete = async () => await handleAdminDelete(params.id, history)

  const breadcrumb = [{ path: '/admin', label: 'Index' }]

  return (
    <>
      <TitleBar label="Admin" currentPage="Editar" breadcrumb={breadcrumb} />
      <Content>
        <Card>
          <CardTitle title="Editar">
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
