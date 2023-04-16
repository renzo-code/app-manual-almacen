import React from 'react'
import Layout from '../../layouts/default'
import NextHead from 'next/head'
import styled from 'styled-components'

const RegistroProducts = () => {
  return (
    <>
      <NextHead>
        <title>Registro de Productos</title>
      </NextHead>
      <Layout>
        <Container>
        <h1>MANUAL PARA REGISTRAR UN PRODUCTO CORRECTAMENTE</h1>
        <p>
          Empezando te presento el formulario en donde llenarás cada campo correspondiente
          para agregar el nuevo producto, es vital que tengas claro los campos que se piden para no
          tener errores o complicaciones luego.
        </p>
        <WrapperImg>
          <img src='/img/registrar-producto.jpg'/>
        </WrapperImg>

        <h1>PASOS RECOMENDADOS PARA UNA CREACIÓN EXITOSA</h1>
        <p>
        Para agregar y/o crear un nuevo producto deberá tener claro los siguientes pasos:
        <br/><br/><br/>
        -Para empezar debe ingresar el codigo SKU (Stock-keeping unit) y en todo caso generarlo con el botón negro de la derecha.
        <br/><br/>
        -Ahora debe seleccionar la categoría que tendrá dicho producto nuevo que será agregado,
        seleccionar uno dentro de todo el listado de opciones que se muestran.
        <br/><br/>
        -Otro paso más sería ingresar una breve descripción, en donde detalle las características que tiene
        el nuevo producto, esta servirá para poder ubicarla más rápido.
        <br/><br/>
        -Acontinuación como paso importante de este formulario, tiene que tener con certeza donde irá ubicado el nuevo producto dentro de todo el 
        almacén, para así el usuario pueda encontrar el producto con una simple consulta ahorrando tiempo y mejorando la calidad de atención.
        <br/><br/>
        -En esta parte tiene que agregar el Pasillo, Metro y Origen que tendrá el producto dentro el almacén.
        <br/><br/>
        -Esta aplicación fue pensada y diseñana para que el usuario al utilizarla vea todo de manera intuitiva.
        </p>
        </Container>
      </Layout>
    </>
  )
}

export default RegistroProducts

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
    color: orange;
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