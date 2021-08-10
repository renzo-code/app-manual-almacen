import styled from 'styled-components'
import Articles from '../Articles/default'
import ButtonSeeMore from '../ButtonSeeMore/default'

const ImagenDefault = "https://larepublica.pe/resizer/3KAU2WunY-i2T7mJEn9_Hti5DNc=/130x130/top/smart/s3.amazonaws.com/arc-authors/gruporepublica/5c0b3df8-490f-4b2d-916a-7181d6dc24b6.png"

const ContentInformes = ({ DataSelecionEditor }) => {
  // console.log("DataSelecionEditor",DataSelecionEditor )
  return (
    <ContainerArtcl>
      <Title>INFORMES</Title>
      <WrapperArticles>
        {
          DataSelecionEditor &&
          DataSelecionEditor.filter(data => data.title != 'Data - [Home]').map((item, i) => (
            <Articles
              key={i}
              redirect={item?.slug}
              picture={item?.data?.multimedia[0]?.path || ImagenDefault}
              description={item?.title.split(" - ")[1]?.substring(0) || "LR Data"}
              drafting={"LR Data"}
            />
          ))

        }
      </WrapperArticles>
      <a href="#" target="_parent" className="WrapperBtn-inf">
        <ButtonSeeMore nameBtn="VER MÁS INFORMES"/>
      </a>
      <style jsx>{`
        .WrapperBtn-inf {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: -30px;
          padding-bottom: 30px;
        }
      `}</style>
    </ContainerArtcl>
    
  )
}

export default ContentInformes

const ContainerArtcl = styled.div`
  height: 100%;
  width: 100%;
`
const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  color: white;
  font-weight: 800;
  line-height: 1.5;
  margin: 0px auto 14px auto;
  width: 50%;
  &::after{
    content: "";
    display: block;
    background-color: #343434;
    width: 100%;
    height: 4px;
    margin-top: 5px;
    @media only screen and (max-width: 620px) {
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 655px) {
    font-size: 25px;
    margin: 20px auto 14px auto;
  }
  @media only screen and (max-width: 385px) {
    font-size: 23px;
  }
`
const WrapperArticles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 20px;
`
