import React from 'react'
import Layout from '../../layouts/default'
import NextHead from 'next/head'
import styled from 'styled-components'

const RegistroProveedores = () => {
  return (
    <>
      <NextHead>
        <title>Proveedores</title>
      </NextHead>
      <Layout>
        <Container>
        <h1>OTROS PUNTOS QUE QUIZÁS DEBAS TENER EN CUENTA</h1>
        </Container>
      </Layout>
    </>
  )
}

export default RegistroProveedores

const Container = styled.div`
  width: 80%;
  height: auto;
  padding: 20px 0;
  margin: 0 auto;

  h1{
    text-align: center;
    font-size: 25px;
    letter-spacing: -0.5px;
    margin: 20px 0 30px 0;
    color: brown;
    font-weight: 900;
  }

  p{
    font-size: 16px;
    margin: 20px 0;
    line-height: 20px;
  }
`
const WrapperImg = styled.div`
  width: 350px;
  margin: 0 auto;

  img{
    width: 100%;
    height: auto;
  }
`