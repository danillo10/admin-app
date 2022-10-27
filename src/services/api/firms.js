import api from './api'
import { cnpjUnmask } from 'utils'

export const handleFirms = async () => {
  return (await api.get(`/firms`)).data
}

export const handleFirm = async (id) => {
  return (await api.get(`/firms/${id}`)).data
}

export const handleStoreFirm = async (data) => {
  data.cnpj = cnpjUnmask(data.cnpj)
  return await api.post(`/firms/store`, data)
}

export const handleUpdateFirm = async (id, data) => {
  data.cnpj = cnpjUnmask(data.cnpj)
  return await api.put(`/firms/${id}/update`, data)
}

export const handleDeleteFirm = async (id) => {
  return await api.delete(`/firms/${id}`)
}
