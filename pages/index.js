import Layout from '../layouts/default'
import SuplementNotice from '../components/Carrousel/carrousel'
import ContentHome from '../components/ContentHome/default'
import { path, prop } from 'ramda'
import styled from 'styled-components'

const URL = process.env.REACT_APP_ENDPOINT
const TOKEN_ID = process.env.REACT_APP_TOKEN

const Home = ({ portada, article, articleEspeciales, BlockLaUnidad }) => {
  const DataPortada = prop("featured_item", prop("data", prop("spotlight", prop("data", portada))))
  const DataSelecionEditor = prop("featured_item", prop("data", prop("spotlight", prop("data", article))))
  const DataEspeciales = prop("featured_item", prop("data", prop("spotlight", prop("data", articleEspeciales))))
  const DataLaUnidad = prop("featured_item", prop("data", prop("spotlight", prop("data", BlockLaUnidad))))
  // console.log('DataLaUnidad', DataLaUnidad)

  return (
    <Layout>
      <SuplementNotice DataPortada={DataPortada} />
      <Content>
        <ContentHome
          DataSelecionEditor={DataSelecionEditor} 
          DataEspeciales={DataEspeciales} 
          DataLaUnidad={DataLaUnidad} 
        />
      </Content>
    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  let responsePortada = {}
  let responseSelecionEditor = {}
  let responseEspeciales = {}
  let responseLaUnidad = {}
  const { REACT_APP_ENDPOINT, REACT_APP_TOKEN } = process.env

  const object_fetch = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/menu',
      'token_id': REACT_APP_TOKEN
    }
  }

  try {
    responsePortada = await fetch(`${REACT_APP_ENDPOINT}/api/spotlight?site_id=larepublica&_id=60b543ddccd63768576e4afa&easy=1&status=1`, object_fetch)
    responsePortada = await responsePortada.json()

    responseSelecionEditor = await fetch(`${REACT_APP_ENDPOINT}/api/spotlight?site_id=larepublica&_id=60b5440f01dfb8684b3282bd&easy=1&status=1`, object_fetch)
    responseSelecionEditor = await responseSelecionEditor.json()

    responseEspeciales = await fetch(`${REACT_APP_ENDPOINT}/api/spotlight?site_id=larepublica&_id=60b5442e258c30219c461fe3&easy=1&status=1`, object_fetch)
    responseEspeciales = await responseEspeciales.json()

    responseLaUnidad = await fetch(`${REACT_APP_ENDPOINT}/api/spotlight?site_id=larepublica&_id=60b54448b91a84512811476d&easy=1&status=1`, object_fetch)
    responseLaUnidad = await responseLaUnidad.json()

  } catch (e) {
    console.error(e)
  }

  return {
    portada: responsePortada,
    article: responseSelecionEditor,
    articleEspeciales : responseEspeciales,
    BlockLaUnidad : responseLaUnidad
  }
}

export default Home

const Content = styled.div`
  width: 100%;
  height: auto;
  background-color: #252525;
`