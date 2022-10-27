import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Validation from './validation'
import ValidationPassword from './validationPassword'
import { setErrors } from 'utils'
import {
  handleAdminShow,
  handleAdminUpdateFile,
  handleUpdateProfile,
  handleAdminUpdatePassword
} from 'services/api/admin'
import { getUser, logout } from 'services/auth'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Upload from 'components/Form/Upload'
import Input from 'components/Form/LabelInput'
import BtnBlue from 'components/Button/BtnBlue'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'

const Page = () => {
  const [messages, setMessages] = useState({ messages: [], alert: '' })
  const [messagesPassword, setMessagesPassword] = useState({
    messages: [],
    alert: ''
  })
  const [messagesFile, setMessagesFile] = useState('')

  const [data, setData] = useState({})
  const history = useHistory()

  const [done, setDone] = useState(true)
  const [uploadErrors, setUploadErrors] = useState([])

  useEffect(() => {
    setDone(true)
    handleAdminShow(getUser().data.id).then((res) => setData(res))
    setDone(false)
  }, [])

  const formik = useFormik({
    initialValues: { name: data.name, email: data.email },
    validationSchema: Yup.object(Validation(Yup)),
    onSubmit: () =>
      handleUpdateProfile(data.id, formik.values)
        .then(() => logout(history))
        .catch((error) =>
          setMessages({ messages: setErrors(error), alert: 'alert-orange' })
        ),
    enableReinitialize: true
  })

  const formikPassword = useFormik({
    initialValues: {
      current_password: '',
      password: '',
      password_confirmation: ''
    },
    validationSchema: Yup.object(ValidationPassword(Yup)),
    onSubmit: () =>
      handleAdminUpdatePassword(formikPassword.values)
        .then(() => history.push(`/empresas`))
        .catch((error) =>
          setMessagesPassword({
            messages: setErrors(error),
            alert: 'alert-orange'
          })
        )
  })

  const files = async (files) => {
    setMessagesFile('')
    setErrors([])
    setDone(true)
    await handleAdminUpdateFile(files[0], data.id)
    handleAdminShow(getUser().data.id).then((res) => setData(res))
    setDone(false)
  }

  return (
    <>
      <TitleBar label="Meu Perfil" currentPage="Index" />
      <Content>
        <Card>
          <CardTitle title="Dados"></CardTitle>
          <Content>
            <form onSubmit={formik.handleSubmit}>
              <Messages
                formMessages={messages.messages}
                alert={messages.alert}
              />
              <Input name="name" label="Nome" formik={formik} />
              <Input type="email" name="email" label="Email" formik={formik} />
              <BtnBlue type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? <Spinner /> : 'Enviar'}
              </BtnBlue>
            </form>
          </Content>
        </Card>

        <Card>
          <CardTitle title="Imagem"></CardTitle>
          <Content>
            <Upload
              onUpload={files}
              fileUrl={data.file_url}
              done={done}
              errors={uploadErrors}
              setErrors={setUploadErrors}
            />
            <p>{messagesFile}</p>
          </Content>
        </Card>

        <Card>
          <CardTitle title="Mudar Senha"></CardTitle>
          <Content>
            <form onSubmit={formikPassword.handleSubmit}>
              <Messages
                formMessages={messagesPassword.messages}
                alert={messagesPassword.alert}
              />
              <Input
                type="password"
                name="current_password"
                label="Senha atual"
                formik={formikPassword}
              />
              <Input
                type="password"
                name="password"
                label="Senha nova"
                formik={formikPassword}
              />
              <Input
                type="password"
                name="password_confirmation"
                label="Confirmar senha"
                formik={formikPassword}
              />
              <BtnBlue type="submit" disabled={formik.isSubmitting}>
                {formikPassword.isSubmitting ? <Spinner /> : 'Enviar'}
              </BtnBlue>
            </form>
          </Content>
        </Card>
      </Content>
    </>
  )
}

export default Page
