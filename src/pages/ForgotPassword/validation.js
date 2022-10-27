const Validation = (yup) => ({
  email: yup
    .string()
    .email('Informe um email válido')
    .required('Campo obrigatório')
})

export default Validation
