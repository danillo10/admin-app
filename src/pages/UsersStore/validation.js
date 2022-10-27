const Validation = (yup) => ({
  name: yup.string().required('Campo obrigatório'),
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Campo obrigatório')
})

export default Validation
