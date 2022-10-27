import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Input from 'components/Form/LabelInput'
import BtnBlue from 'components/Button/BtnBlue'
import BtnRed from 'components/Button/BtnRed'
import BtnBox from 'components/Button/BtnBox'
import BtnWhite from 'components/Button/BtnWhite'
import Messages from 'components/Messages'
import Spinner from 'components/Spinner'
import Modal from 'components/Modal'
import Table from 'components/Table'

const Component = (props) => {
  const breadcrumb = [
    { path: '/empresas', label: 'Index' },
    { path: `/empresas/${props.params.id}/usuarios`, label: 'Usuários' }
  ]
  return (
    <>
      <TitleBar label="Empresas" currentPage="Editar" breadcrumb={breadcrumb} />
      <Content>
        <Card>
          <CardTitle title="Empresa" />
          <Table>
            <thead>
              <tr>
                <th>Razão Social</th>
                <th>Nome Fantasia</th>
                <th>CNPJ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{props.firm.name}</td>
                <td>{props.firm.market_name}</td>
                <td>{props.firm.cnpj}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Card>
          <CardTitle title="Editar usuário">
            <BtnRed onClick={() => props.setVisibleModal(true)}>Excluir</BtnRed>
          </CardTitle>
          <Content>
            <form onSubmit={props.formik.handleSubmit}>
              <Messages
                formMessages={props.messages.messages}
                alert={props.messages.alert}
              />
              <Input name="name" label="Nome" formik={props.formik} />
              <Input name="email" label="Email" formik={props.formik} />
              <BtnBlue type="submit" disabled={props.formik.isSubmitting}>
                {props.formik.isSubmitting ? <Spinner /> : 'Enviar'}
              </BtnBlue>
            </form>
          </Content>
        </Card>
      </Content>
      <Modal
        visibleModal={props.visibleModal}
        setVisibleModal={props.setVisibleModal}
      >
        <Card>
          <Content>
            <Content>
              <p>Deseja excluir esse item?</p>
              <BtnBox>
                <BtnRed onClick={props.handleDelete}>Excluir</BtnRed>
                <BtnWhite onClick={() => props.setVisibleModal(false)}>
                  Cancelar
                </BtnWhite>
              </BtnBox>
            </Content>
          </Content>
        </Card>
      </Modal>
    </>
  )
}

export default Component
