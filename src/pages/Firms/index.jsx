import { useEffect, useState } from 'react'
import { handleFirms } from 'services/api/firms'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Table from 'components/Table'
import LinkBlue from 'components/Button/LinkBlue'
import SmLinkGreen from 'components/Button/SmLinkGreen'
import Td from 'components/Td'
import { FaEdit, FaUserFriends } from 'react-icons/fa'
import { SiPowerbi } from 'react-icons/si'
import { cnpjMask } from 'utils'

const Page = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    handleFirms().then((res) => setData(res))
  }, [])

  return (
    <>
      <TitleBar label="Empresas" currentPage="Index" />
      <Content>
        <Card>
          <CardTitle title="Listagem">
            <LinkBlue to="/empresas/cadastrar">Cadastrar</LinkBlue>
          </CardTitle>
          <Table>
            <thead>
              <tr>
                <th width="60">#</th>
                <th>Razão Social</th>
                <th>Nome Fantasia</th>
                <th>CNPJ</th>
                <th width="50">Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{`#${item.id}`}</td>
                  <td>{item.name}</td>
                  <td>{item.market_name}</td>
                  <td>{cnpjMask(item.cnpj)}</td>
                  <Td>
                    <SmLinkGreen to={`/empresas/${item.id}/editar`}>
                      <FaEdit />
                    </SmLinkGreen>
                    <SmLinkGreen to={`/empresas/${item.id}/usuarios`}>
                      <FaUserFriends />
                    </SmLinkGreen>
                    <SmLinkGreen to={`/empresas/${item.id}/contas`}>
                      <SiPowerbi />
                    </SmLinkGreen>
                  </Td>
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
