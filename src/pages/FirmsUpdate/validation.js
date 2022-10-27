const Validation = (yup) => ({
  name: yup.string().required('Campo obrigatório'),
  market_name: yup.string().required('Campo obrigatório'),
  cnpj: yup.string().required('Campo obrigatório')
})

export default Validation
