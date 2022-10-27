import api from './api'
import { v4 } from 'uuid'

export const handleAdminLogin = async (data) => {
  const { email, password } = data
  const response = await api.post(`/admin/login`, { email, password })
  return response
}

export const handleAdminForgotPassword = async (data) => {
  const uuid = v4()
  const values = {
    emailTo: data.email,
    emailFrom: process.env.REACT_APP_EMAIL_FROM,
    smtpHost: process.env.REACT_APP_EMAIL_HOST,
    smtpPort: process.env.REACT_APP_EMAIL_PORT,
    smtpUser: process.env.REACT_APP_EMAIL_USER,
    smtpPass: process.env.REACT_APP_EMAIL_PASS,
    uuid: uuid,
    emailMessage: `
        <h2>Redefinição de senha</h2>
        <p>Acesse o link abaixo para redefinir sua senha.</p>
        <a href="${process.env.REACT_APP_URL_APP}/recuperar-senha/${uuid}">${process.env.REACT_APP_URL_APP}/recuperar-senha/${uuid}</a>
      `
  }
  return await api.post(`/users/forgot-password`, values)
}

export const handleAdminRecoverPassword = async (token, data) => {
  return await api.put(`/admin/recover-password/${token}`, data)
}

export const handleAdmin = async () => (await api.get(`/admin`)).data

export const handleAdminShow = async (id) =>
  (await api.get(`/admin/${id}`)).data

export const handleStoreAdmin = async (data) => {
  const pass = v4().split('-')[0]
  const values = {
    name: data.name,
    emailTo: data.email,
    password: pass,
    emailFrom: process.env.REACT_APP_EMAIL_FROM,
    smtpHost: process.env.REACT_APP_EMAIL_HOST,
    smtpPort: process.env.REACT_APP_EMAIL_PORT,
    smtpUser: process.env.REACT_APP_EMAIL_USER,
    smtpPass: process.env.REACT_APP_EMAIL_PASS,
    emailMessage: `
     	<h3>Cadastro realizado com sucesso!.</h3>
     	<p>Olá, seja bem vindo ao <strong>Analyticdbi Embed</strong></p>
     	<p>Você foi cadastrado para acessar a plataforma e ter acesso aos Relatórios e Dashboard dos seus principais projetos.</p>
     	<p>Segue abaixo os seus dados de acesso:</p>
       <ul>
     			<li>Email: ${data.email}</li>
     			<li>Senha: ${pass}</li>
     	</ul>
     `
  }
  return await api.post(`/admin/store`, values)
}

export const handleUpdateAdmin = async (id, data) => {
  const { name, email } = data
  return await api.put(`/admin/${id}/update`, { name, email })
}

export const handleAdminUpdateFile = async (data, id) => {
  const values = new FormData()
  values.append('file', data)
  try {
    await api.put(`/admin/${id}/upload`, values)
    return
  } catch (error) {
    return error
  }
}

export const handleAdminUpdatePassword = async (data) => {
  return await api.put(`/admin/update-password`, data)
}

export const handleUpdateProfile = async (profileId, data) => {
  const values = {
    name: data.name,
    email: data.email
  }
  return await api.put(`/admin/${profileId}/update`, values)
}

export const handleAdminDelete = async (id, history) => {
  await api.delete(`/admin/${id}`)
  return history.push('/admin')
}
