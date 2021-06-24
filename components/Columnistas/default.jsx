import styled from 'styled-components'

const Columnistas = () => {
  return (
    <div>
      <ContentColumnistas>
        <div>
          <WrapperImg>
            <Image src="https://larepublica.pe/resizer/VvN-SXTypPkZxTInvKPNLFIDpgc=/130x130/top/smart/s3.amazonaws.com/arc-authors/gruporepublica/eeca23f5-4279-453e-bffc-10d3c2176f9a.png"/>
          </WrapperImg>
          <BlockText>
            <Names>
              Rumi Cevallos
            </Names>
          </BlockText>
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
  height: 240px;
  width: 195px;
  @media (max-width: 600px) {
    width: 155px;
  }
`
const WrapperImg = styled.div`
  max-height: 150px;
  max-width: 150px;
  margin: 5px auto;
  `
const Image = styled.img`
  width: 100%;
  border-radius: 100px;
  height: 100%;
`
const BlockText = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  max-width: 165px;
  margin: 0 auto;
`
const Names = styled.h3`
  font-size: 18px;
  width: 100%;
  text-align: center;
  color: white;
  letter-spacing: 0.5px;
`