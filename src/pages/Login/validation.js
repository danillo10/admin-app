const Validation = (yup) => ({
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'Deve conter no minimo 6 caracteres')
    .required('Campo obrigatório')
})

export default Validation
