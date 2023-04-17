import React from 'react'
import Layout from '../../layouts/default'
import NextHead from 'next/head'
import styled from 'styled-components'

const RegistroProveedores = () => {
  return (
    <>
      <NextHead>
        <title>Registro de Proveedores</title>
      </NextHead>
      <Layout>
        <Container>
        <h1>MANUAL PARA REGISTRAR UN PROVEEDOR CORRECTAMENTE</h1>
        <p>
          Empezando te presento el formulario en donde llenarás cada campo correspondiente
          para agregar un nuevo Proveedor, es vital que tengas claro los campos que se piden para no
          tener errores o complicaciones luego.
        </p>
        <WrapperImg>
          <img src='/img/registro-proveedores.jpg'/>
        </WrapperImg>

        <h1>PASOS RECOMENDADOS PARA UNA CREACIÓN EXITOSA</h1>
        <p>
        Para agregar y/o crear un nuevo proveedor deberá tener claro los siguientes pasos:
        <br/><br/><br/>
        -Para empezar deberás asignar un ID siguiente la correlativa generada e iniciada desde el inicio.
        <br/><br/>
        -Ingresar la razón social de la empresa proveedora.
        -Ingresar el RUC que es fundamental para la facturación y saber con que tipo de empresa se trabaja.
        -Ingresar el código Postal de la ubicación del proveedor acompañado de su número de contacto.
        -Ingresa el correo electrónico corporativo del proveedor
        -Ingresa la dirección fiscal
        -Seleccionamos su País y departamente según su ubicación.
        -Para finalizar y guardar los datos ingresados, dar click en el boton <b>REGISTRAR</b>.
        <br/><br/><br/>
        -Adicionalmente se tienen estas 3 opciones más según sean necesarios:
        <br/><br/>
        º <b>CONSULTAR</b>: Basta con ingresar el ID para identificar el producto y darle click al boton <b>CONSULTAR</b>, 
        acontinuación se mostrarán los datos del proveedor.
        <br/><br/>
        º <b>ELIMINAR</b>: De igual forma ingresar el ID correspondiente y dar click en el botón <b>ELIMINAR</b> para quitar o 
        remover el proveedor señalado.
        <br/><br/>
        º <b>MODIFICAR</b>: Si se desea cambiar algún tipo de información a un proveedor ya registrado, se pueden modificar 
        primero identificandolo atraves del ID, segundo mostrará la informacion para poder editarla y una vez ya modificada 
        se deberá hacer click en el botón <b>MODIFICAR</b> para confirmar el cambio.
        </p>
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