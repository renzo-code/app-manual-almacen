import React from 'react'
import Layout from '../../layouts/default'
import NextHead from 'next/head'
import styled from 'styled-components'

const BusquedaProduct = () => {
  return (
    <>
      <NextHead>
        <title>Búsqueda de Productos</title>
      </NextHead>
      <Layout>
        <Container>
          <h1>MANUAL PARA CONSULTAR Y/O BUSCAR UN PRODUCTO DENTRO DEL ALMACÉN CORRECTAMENTE</h1>
          <p>
            Empezando te presento el formulario en donde llenarás cada campo correspondiente
            para consultar el producto deseado, es vital que tengas claro los campos que se piden para no
            tener errores o complicaciones luego.
        </p>
        <WrapperImg>
          <img src='/img/consultar-ubicacion-producto.jpg'/>
        </WrapperImg>

        <h1>PASOS RECOMENDADOS PARA UNA CONSULTA EXITOSA</h1>
        <p>
          Para consultar la ubicación de cualquier producto deberá tener claro los siguientes pasos:
          <br/><br/><br/>
          -Deberá ingresar el SKU del producto que se desea consultar y ubicar dentro del amacén.
          <br/><br/>
          -Acontinuación puede buscar haciendo click al boton rojo en el lado derecho llamado Consultar, y la 
          herramienta agregará los campos según el SKU asignado y mostrará cada detalle de ese producto.
          <br/><br/>
          -Esta aplicación fue pensada y diseñana para que el usuario al utilizarla vea todo de manera intuitiva.
        </p>
        </Container>
      </Layout>
    </>
  )
}

export default BusquedaProduct

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
    color: green;
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