import styled from 'styled-components'

const Footer = () => {
  return(
    <ContainerFooter>
      <ContainerFooter>
      <WrapperInfo>
        <WrapperLogo>
          <img src="./img/casa-ceo.png" />
        </WrapperLogo>
        <ContentText>
          <BlockText>
            <h1>INFORMACIÓN</h1>
            <br/>
            <h2>App para móvil y desktop</h2>
            <h2>Aplicación de Almacén</h2>
            <h2>Mejora la busqueda e identificacion de los productos</h2>
            <h2>App intuitiva para todos los usuarios</h2>
          </BlockText>
          <BlockText2>
            <h1>INFORMACIÓN DE CONTACTO</h1>
            <br/>
            <h3>
              <div>
                <img src="./img/location.png" alt="icon"/>
              </div>
              Jr Tarapaca 595, Cercado, Huanta
            </h3>
            <h3>
              <div>
                <img src="./img/location.png" alt="icon"/>
              </div>
              Jr Maria Montesori 150, Cercado
            </h3>
            <h3>
              <div>
                <img src="./img/mobile.png" alt="icon"/>
              </div>
              (+51) 976 596 5779
            </h3>
            <h3>
              <div>
                <img src="./img/mail.png" alt="icon"/>
              </div>
              pt06790215@idat.edu.pe
            </h3>
            <h3>
              <div>
                <img src="./img/user.png" style={{backgroundColor: "white"}} alt="icon"/>
              </div>
              CEO: JOSE LUIS CHUQUIPIONDO
            </h3>
          </BlockText2>
        </ContentText>
      </WrapperInfo>

      </ContainerFooter>
      <Copyright>
        © 2023 Copyright - Todos los derechos reservados
      </Copyright>
    </ContainerFooter>
  )
}

export default Footer


const ContainerFooter = styled.div`
  max-width: 1440px;
  width: 100%;
  height: auto;
  padding-top: 20px;
  margin: 0 auto 0;
  padding-bottom: 20px;
  background-color: black;
  @media (max-width: 600px) {
    /* display: block; */
  }
`
const WrapperInfo = styled.div`
  display: flex;
`
const WrapperLogo = styled.div`
  height: 100%;
  max-width: 300px;
  width: 100%;
  /* margin: 0 auto; */
  padding-left: 40px;
  img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 537px){
    display: none;
  }
`
const ContentText = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: calc(100% - 300px);
  height: 100%;
  padding: 0 50px;

  @media (max-width: 865px){
    padding: 0;
    display: block;
    width: 100%;
  }
  /* @media (max-width: 537px){
    display: block;
  } */
`
const BlockText = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 25px;

  h1{
    font-size: 20px;
    font-weight: bolder;

  }
  h2{
    font-size: 15px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    font-size: 15px;
    line-height: 40px;

    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
  h3{
    display: flex;
    justify-content: center;
    font-size: 15px;
    line-height: 40px;

    div{
      height: 20px;
      width: 20px;
      margin-top: 5px;

      img{
        width: 100%;
        height: 100%;
      }
    }

    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
const BlockText2 = styled.div`
  text-align: center;
  color: white;
  h1{
    font-size: 20px;
    font-weight: bolder;

    @media (max-width: 537px){
      /* border-top: solid 1px white; */
      padding-top: 20px;
    }
  }
  h2{
    font-size: 15px;
    line-height: 40px;

    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
  h3{
    display: flex;
    justify-content: center;
    font-size: 15px;
    line-height: 40px;
    
    div{
      height: 20px;
      width: 20px;
      margin-top: 5px;

      img{
        width: 100%;
        height: 100%;
        ${'' /* margin-right: 5px; */}
      }
    }

    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`
const Copyright = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 50px;
  color: white;
  margin: 0 auto;
  background-color:black ;
  border-top: 1px solid white;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
`