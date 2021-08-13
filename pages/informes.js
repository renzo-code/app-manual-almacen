import Layout from '../layouts/default'
import ContentInformes from '../components/ContentInformes/default'
import { prop } from 'ramda'
import styled from 'styled-components'

const URL = process.env.REACT_APP_ENDPOINT
const TOKEN_ID = process.env.REACT_APP_TOKEN

const Home = ({ article }) => {
  const DataSelecionEditor = prop("data", prop("packages", prop("data", article)))
  return (
    <Layout>
      <Content>
        <ContentInformes
          DataSelecionEditor={DataSelecionEditor} 
        />
      </Content>
    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  let responseSelecionEditor = {}
  let responseEspeciales = {}
  const { REACT_APP_ENDPOINT, REACT_APP_TOKEN } = process.env

  const object_fetch = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/menu',
      'token_id': REACT_APP_TOKEN
    }
  }

  try {

    responseSelecionEditor = await fetch(`${REACT_APP_ENDPOINT}/api/content/package/list?site_id=larepublica&status=1&order_field=updated_at&subdomain=data`, object_fetch)
    responseSelecionEditor = await responseSelecionEditor.json()

    responseEspeciales = await fetch(`${REACT_APP_ENDPOINT}/api/spotlight?site_id=larepublica&_id=60b5442e258c30219c461fe3&easy=1&status=1`, object_fetch)
    responseEspeciales = await responseEspeciales.json()

  } catch (e) {
    console.error(e)
  }

  return {
    article: responseSelecionEditor,

    articleEspeciales : responseEspeciales,
  }
}

export default Home

const Content = styled.div`
  width: 100%;
  height: auto;
  background-color: #252525;
`