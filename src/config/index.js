const {
  REACT_APP_SECRET,
  REACT_APP_URL_API,
  REACT_APP_URL_APP,
  REACT_APP_EMAIL_FROM,
  REACT_APP_EMAIL_HOST,
  REACT_APP_EMAIL_PORT,
  REACT_APP_EMAIL_USER,
  REACT_APP_EMAIL_PASS
} = process.env

const config = {
  envSecret: REACT_APP_SECRET,
  envApi: REACT_APP_URL_API,
  envUrl: REACT_APP_URL_APP,
  tokenKey: "@admin-Analyticdbi-Token",

  emailFrom: REACT_APP_EMAIL_FROM,
  smtpHost: REACT_APP_EMAIL_HOST,
  smtpPort: REACT_APP_EMAIL_PORT,
  smtpUser: REACT_APP_EMAIL_USER,
  smtpPass: REACT_APP_EMAIL_PASS
}

export default config