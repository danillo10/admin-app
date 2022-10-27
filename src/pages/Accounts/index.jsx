import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { handleAccounts } from 'services/api/accounts'
import { handleFirm } from 'services/api/firms'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Table from 'components/Table'
import LinkBlue from 'components/Button/LinkBlue'
import SmLinkGreen from 'components/Button/SmLinkGreen'
import { FaEdit } from 'react-icons/fa'

const Page = () => {
  const params = useParams()
  const [data, setData] = useState([])
  const [firm, setFirm] = useState({})

  useEffect(() => {
    handleAccounts(params.id).then((res) => setData(res))
    handleFirm(params.id).then((res) => setFirm(res))
  }, [params.id])

  const breadcrumb = [{ path: '/empresas', label: 'Index' }]

  return (
    <>
      <TitleBar label="Empresas" currentPage="Contas" breadcrumb={breadcrumb} />
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
                <td>{firm.name}</td>
                <td>{firm.market_name}</td>
                <td>{firm.cnpj}</td>
              </tr>
            </tbody>
          </Table>
        </Card>
        <Card>
          <CardTitle title="Contas">
            <LinkBlue to={`/empresas/${params.id}/contas/cadastrar`}>
              Cadastrar
            </LinkBlue>
          </CardTitle>
          <Table>
            <thead>
              <tr>
                <th width="60">#</th>
                <th>Client ID</th>
                <th>Username</th>
                <th width="50">Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{`#${item.id}`}</td>
                  <td>{item.client_id}</td>
                  <td>{item.username}</td>
                  <td>
                    <SmLinkGreen
                      to={`/empresas/${params.id}/contas/${item.id}/editar`}
                    >
                      <FaEdit />
                    </SmLinkGreen>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </Content>
    </>
  )
}

export default Page
