import api from './api'
import { v4 } from 'uuid'

export const handleUsers = async (firmId) =>
  (await api.post(`/users/list-by-firm`, { firm_id: firmId })).data

export const handleUser = async (id) => (await api.get(`/users/${id}`)).data

export const handleStoreUser = async (data, params) => {
  const pass = v4().split('-')[0]
  const { name, email } = data
  const values = {
    firm_id: params.id,
    name,
    email,
    password: pass,
    emailFrom: 'reenviosenhas@gmail.com',
    smtpHost: 'smtp.sendgrid.net',
    smtpPort: '587',
    smtpUser: 'apikey',
    smtpPass:
      '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',
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
  return await api.post(`/users/store`, values)
}

export const handleUpdateUser = async (params, data) => {
  const { name, email } = data
  return await api.put(`/users/${params.user_id}/update`, { name, email })
}

export const handleDeleteUser = async (params) => {
  return await api.delete(`/users/${params.user_id}`)
}
