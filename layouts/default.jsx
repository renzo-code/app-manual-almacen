import styled from 'styled-components'

import NextHead from 'next/head'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`
const ContainerMain = styled.main`
  box-shadow: 1px 0px 20px 5px rgba(0,0,0,0.7);
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 450px);
  font-family: Arial, Helvetica, sans-serif;
  @media(max-width: 768px) {
    /* padding: 0 15px; */
  }
  @media(max-width: 360px) {
    /* padding: 10px 15px ; */
  }
`

const Layout = (props) => {
  const {
    children
  } = props

  return(
    <>
      <NextHead>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
        <title>LR Data</title>
      </NextHead>
      <Wrapper>
        <Header/>
        <ContainerMain>
          {children}
        </ContainerMain>
        <Footer/>
      </Wrapper>
    </>
  )
}

export default Layout