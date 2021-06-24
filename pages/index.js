import Layout from '../layouts/default'
import SuplementNotice from '../components/Carrousel/carrousel'
import ContentHome from '../components/ContentHome/default'

import styled from 'styled-components'

const Home = () => {
  return (
    <Layout>
      <SuplementNotice/>
      <Content>
        <ContentHome/>
      </Content>
    </Layout>
  )
}

export default Home

const Content= styled.div`
  width: 100%;
  height: auto;
  background-color: #252525;
`