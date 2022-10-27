import api from './api'

export const handleAccounts = async (firm_id) =>
  (await api.post(`/accounts/list-by-firm`, { firm_id })).data

export const handleAccount = async (id) =>
  (await api.get(`/accounts/${id}`)).data

export const handleStoreAccounts = async (data) => {
  return await api.post(`/accounts/store`, data)
}

export const handleUpdateAccounts = async (params, data) => {
  return await api.put(`/accounts/${params.account_id}/update`, data)
}

export const handleDeleteAccounts = async (params, history) => {
  await api.delete(`/accounts/${params.account_id}`)
  return history.push(`/empresas/${params.id}/contas`)
}
