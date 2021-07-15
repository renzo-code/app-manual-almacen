import styled from 'styled-components'

import NextHead from 'next/head'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #252525;
`
const ContainerMain = styled.main`
  box-shadow: 1px 1px 10px 5px rgba(0,0,0,0.7);
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 450px);
  font-family: Arial, Helvetica, sans-serif;
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
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png"/>
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <title>LR Data: investigación social y periodismo de datos</title>
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