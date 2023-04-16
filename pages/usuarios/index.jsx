import React from 'react'
import Layout from '../../layouts/default'
import NextHead from 'next/head'
import styled from 'styled-components'

const Usuarios = () => {
  return (
    <>
      <NextHead>
        <title>Mantenimiento de Usuarios</title>
      </NextHead>
      <Layout>
        <Container>
          <h1>MANUAL PARA REGISTRAR UN USUARIO CORRECTAMENTE</h1>
          <p>
            Empezando te presento el formulario en donde llenarás cada campo correspondiente
            para agregar el nuevo usuario, es vital que tengas claro los campos que se piden para no
            tener errores o complicaciones luego.
          </p>
          <WrapperImg>
            <img src='/img/registrar-usuario.jpg'/>
          </WrapperImg>

          <h1>PASOS RECOMENDADOS PARA UNA CREACIÓN EXITOSA</h1>
          <p>
            Para agregar y/o crear un nuevo usuario deberá tener claro los siguientes pasos:
            <br/><br/>
            -No todos pueden registrar un personal, solo lo pueden hacer los administradores.
            <br/><br/>
            -Para registrar un nuevo usuario deberas ingresar su número de DNI (Documento Nacional de Identidad) o 
            Carnet de Extranjería si fuera el caso de un extrangero.
            <br/><br/>
            -Como caso opcional también si se desea consultar o buscar un usuario ya existente puede agregar el DNI y
            buscarlo dando click en el boton negro de la izquierda BUSCAR POR DNI.
            <br/><br/>
            -En este paso es de vital importancia saber con certeza que cargo va a realizar dicha persona para seleccionar 
            el cargo, dependiendo que cargo vaya a escoger, el nuevo usuario obtendrá los permisos necesarios para realizar 
            sus actividades y rol dentro del App.
            <br/><br/>
            -Acontinuación mostraré la parte donde tendrás que elegir el cargo:
            <br/><br/>
            <WrapperImg>
              <img src='/img/registrar-usuario-permisos.jpg'/>
            </WrapperImg>

          -Esta aplicación fue pensada y diseñana para que el usuario al utilizarla vea todo de manera intuitiva.
          </p>
        </Container>
      </Layout>
    </>
  )
}

export default Usuarios

const Container = styled.div`
  width: 80%;
  height: auto;
  padding: 20px 0;
  margin: 0 auto;

  h1{
    text-align: center;
    font-size: 25px;
    letter-spacing: -0.5px;
    margin: 0 0 30px 0;
    color: #1361AB;
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