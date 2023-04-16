import styled from 'styled-components'

const Header = () => {
  return (
    <>
      <ContentItems>
        <WrapperImg>
          <img src='./img/casa-ceo.png' alt='logo casa'/>
        </WrapperImg>
        <Title>APP ADMINISTRACIÓN DE ALMACÉN</Title>
      </ContentItems>
    </>
  )
}

export default Header

const ContentItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  max-height: 135px;
  min-height: 80px;
  height: 100%;
  ${'' /* max-width: 1440px; */}
  margin: 0 auto;
  border-bottom: 3px solid #E1081F;
  padding: 0 10px;
  background-color: #0072CE;
`
const Title = styled.h1`
  font-size: 22px;
  color: white;
  font-weight: 900;
`

const WrapperImg = styled.div`
  width: 50px;
  margin-right: 20px;

  img{
    width: 50px;
    height: auto;
  }
`