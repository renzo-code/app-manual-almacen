import styled from 'styled-components'

const Columnistas = ({ imagen, nameDrafting, ocupacion }) => {
  return (
    <div>
      <ContentColumnistas>
        <div>
          <WrapperImg>
            <Image src={imagen}/>
          </WrapperImg>
          <BlockText>
            <Names> {nameDrafting} </Names>
          </BlockText>
            <Ocupation>{ocupacion}</Ocupation>
        </div>
      </ContentColumnistas>
    </div>
  )
}

export default Columnistas

const ContentColumnistas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 280px;
  width: 195px;
  @media (max-width: 600px) {
    width: 130px;
    max-height: 220px;
  }
  @media (max-width: 410px) {
    max-height: 200px;
    width: 110px;
  }
`
const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 150px;
  max-width: 150px;
  margin: 5px auto;
  `
const Image = styled.img`
  width: 150px;
  border-radius: 100px;
  height: 150px;
  object-fit: cover;
  @media (max-width: 600px) {
    width: 110px;
    height: 110px;
  }
  @media (max-width: 410px) {
    width: 100px;
    height: 100px;
  }
`
const BlockText = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  max-width: 165px;
  margin: 0 auto;
  @media (max-width: 600px) {
    height: 35px;
  }
`
const Names = styled.h3`
  font-size: 18px;
  width: 100%;
  text-align: center;
  color: white;
  letter-spacing: 0.5px;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`
const Ocupation = styled.h5`
  font-size: 14px;
  width: 100%;
  text-align: center;
  color: white;
  letter-spacing: 0.5px;
  font-weight: 100;
  font-style: oblique;
  @media (max-width: 600px) {
    font-size: 13px;
  }
  @media (max-width: 420px) {
    margin-top: 5px;
    font-size: 11px;
  }
`