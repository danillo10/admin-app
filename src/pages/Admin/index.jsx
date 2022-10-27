import { useEffect, useState } from 'react'
import { handleAdmin } from 'services/api/admin'
import TitleBar from 'components/TitleBar'
import Content from 'components/Content'
import Card from 'components/Card'
import CardTitle from 'components/CardTitle'
import Table from 'components/Table'
import LinkBlue from 'components/Button/LinkBlue'
import SmLinkGreen from 'components/Button/SmLinkGreen'
import { FaEdit } from 'react-icons/fa'

const Page = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    handleAdmin().then((res) => setData(res))
  }, [])

  return (
    <>
      <TitleBar label="Admin" currentPage="Index" />
      <Content>
        <Card>
          <CardTitle title="Listagem">
            <LinkBlue to="/admin/cadastrar">Cadastrar</LinkBlue>
          </CardTitle>
          <Table>
            <thead>
              <tr>
                <th width="60">#</th>
                <th>Nome</th>
                <th>Email</th>
                <th width="50">Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{`#${item.id}`}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <SmLinkGreen to={`/admin/${item.id}/editar`}>
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
