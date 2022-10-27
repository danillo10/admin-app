const Validation = (yup) => ({
  client_id: yup.string().required('Campo obrigatório'),
  username: yup
    .string()
    .email('Informe um email válido')
    .required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório')
})

export default Validation
