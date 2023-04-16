import Acordeon from '../components/Acordeon'
import Layout from '../layouts/default'

import styled from 'styled-components'

const Home = () => {
  return(
    <>
      <Layout>
        <Content>
          <WrapperAsk>
            <h4>BIENVENIDO</h4>
            <h1>Centro de Ayuda</h1>
            <h2>Hola, ¿cómo podemos ayudarte?</h2>
            <div>
            <a target='_self' href='/usuarios'>
              <ButtonOptions>DETALLES DE USUARIOS</ButtonOptions>
            </a>
            <a target='_self' href='/registro-productos'>
              <ButtonOptions>REGISTRO DE PRODUCTOS</ButtonOptions>
            </a>
            <a target='_self' href='/registro-proveedores'>
              <ButtonOptions>REGISTRO DE PROVEEDORES</ButtonOptions>
            </a>
            <a target='_self' href='/busqueda-producto'>
              <ButtonOptions>BUSQUEDA DE PRODUCTO</ButtonOptions>
            </a>
            </div>
          </WrapperAsk>
        </Content>
          <div className='warpper-img'>
            <img className="img-preguntas" src='./img/preguntas.webp'/>
          </div>
          <Acordeon/>
      </Layout>
      <style jsx>{`
        .warpper-img{
          width: 100%;
        }
        .img-preguntas{
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default Home

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 10px;
  justify-content: center;
`
const WrapperAsk = styled.div`
  width: 90%;
  background-image:url("./img/ayuda.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  padding-bottom: 40px;

  h1{
    color: #8A8B91;
    margin: 0 auto;
    padding-bottom: 45px;
    font-size: 21px;
    text-align: center;
  }
  h2{
    font-size: 34px;
    padding-bottom: 100px;
    text-align: center;
  }
  h4{
    text-align: center;
    font-size: 40px;
    padding-bottom: 80px;
    padding-top: 30px;
  }
  div{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
    flex-wrap: wrap;

    a{

    }
  }
`

const ButtonOptions = styled.div`
  display: flex;
  align-items: center;
  height: 63px;
  width: 100%;
  max-width: 210px;
  text-align: center;
  color: white;
  padding: 10px;
  background-color: #E1081F;
  font-weight: 700;
  line-height: 17px;
  border-radius: 10px;
  font-size: 16px;
  border: solid 2px #0072CE;

  &:hover{
    border: solid 2px #E1081F;
    color: white;
    cursor: pointer;
    background-color: #0072CE;
    transition: 0.5s;
  }
`