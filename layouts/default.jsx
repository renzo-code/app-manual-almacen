import styled from 'styled-components'

import NextHead from 'next/head'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'

const Layout = (props) => {
  const {
    children
  } = props

  return(
    <>
      <NextHead>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="https://cdn.larepublica.pe/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="https://cdn.larepublica.pe/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="https://cdn.larepublica.pe/favicon-16x16.png"/>
        <link rel="icon" type="image/x-icon" href="https://cdn.larepublica.pe/favicon.ico"></link>
        <link rel="canonical" href="https://data.larepublica.pe/"/>
        <meta name="google-site-verification" content="W-TjZzBM8yhacjHbq4YdHdHVQ-RV2XfXhZHhk2k7Zjc" /> */}
        <title>Home</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/casa-ceo.png"></link>
        <link rel="icon" type="image/png" sizes="192x192" href="/img/casa-ceo.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/casa-ceo.png"></link>
        {/* <meta name="title" content="Investigación social y periodismo de datos"/> */}
        {/* <meta name="description" content="Informes e investigaciones de temas sociales y políticos en Perú y el mundo. Publicaciones sobre salud, educación, viviendas, obras, infraestructura, elecciones, presidencia, entre otras noticias de último minuto. Interactivo | Mapas | Gráficos"/>
        <meta httpEquiv="content-language" content="es"/>
        <meta name="author" content="LR Data"/> */}

        {/* <meta name="googlebot" content="index,follow"/>
        <meta name="bingbot" content="index,follow"/>
        <meta name="robots" content="max-image-preview:large"/>
        <link rel="alternate" type="application/rss+xml" href="https://cdn.mysitemapgenerator.com/shareapi/rss/2806433641"/> */}
      
        {/* Metadatos Twitter */}
        {/* <meta name="twitter:title" content="LR Data: Investigación social y periodismo de datos"/>
        <meta name="twitter:description" content="Informes e investigaciones de temas sociales y políticos en Perú y el mundo. Publicaciones sobre salud, educación, viviendas, obras, infraestructura, elecciones, presidencia, entre otras noticias de último minuto. Interactivo | Mapas | Gráficos" />
        <meta name="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/04/lg_63b588f3da4e0c25964c1021.jpg" />
        <meta name="twitter:url" content="https://data.larepublica.pe/" />
        <meta property="twitter:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/04/lg_63b588f3da4e0c25964c1021.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@larepublica_pe" />
        <meta name="twitter:creator" content="@larepublica_pe" />
        <meta name="twitter:width" content="828" />
        <meta name="twitter:height" content="450" /> */}

        {/* Metadatos Facebook */}
        {/* <meta property="og:title" content="LR Data: Investigación social y periodismo de datos"/>
        <meta property="og:description" content="Informes e investigaciones de temas sociales y políticos en Perú y el mundo. Publicaciones sobre salud, educación, viviendas, obras, infraestructura, elecciones, presidencia, entre otras noticias de último minuto. Interactivo | Mapas | Gráficos"/>
        <meta property="og:image" content="https://origin.cronosmedia.glr.pe/large/2023/01/04/lg_63b588f3da4e0c25964c1021.jpg"/>
        <meta property="og:url" content="https://data.larepublica.pe/" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="828"/>
        <meta property="og:image:height" content="450"/>
        <meta property="og:site_name" content="La República" />
        <meta property="fb:pages" content="145820412845"/>
        <meta property="fb:app_id" content="602624269799095"/> */}
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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  overflow-x: hidden;
  overflow-y: 100%;
`
const ContainerMain = styled.main`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  padding: 0;
  min-height: calc(100vh - 300px);
  font-family: Arial, Helvetica, sans-serif;
`
