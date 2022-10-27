import jwt from 'jsonwebtoken'
import config from 'config'

export const userAuthenticated = () => {
  if (localStorage.getItem(config.tokenKey) !== null) {
    try {
      return jwt.verify(localStorage.getItem(config.tokenKey), config.envSecret)
    } catch (e) {
      return false
    }
  }
}

export const getUser = () => jwt.decode(localStorage.getItem(config.tokenKey))

export const getToken = () => localStorage.getItem(config.tokenKey)

export const login = (token) => localStorage.setItem(config.tokenKey, token)

export const logout = (history) => {
  localStorage.removeItem(config.tokenKey)
  return history.push('/login')
}
