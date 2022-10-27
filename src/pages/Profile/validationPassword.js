const Validation = (yup) => ({
  password: yup
    .string()
    .min(6, 'Deve conter no minimo 6 caracteres')
    .required('Campo obrigatório'),
  password_confirmation: yup
    .string()
    .required('Campo obrigatório')
    .oneOf(
      [yup.ref('password'), null],
      'Confirmação de senha precisa ser igual a senha'
    )
})

export default Validation
