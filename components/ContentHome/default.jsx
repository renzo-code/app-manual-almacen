import styled from 'styled-components'
import Articles from '../Articles/default'
import Columnistas from '../Columnistas/default'
import CarouselArticles from '../CarouselArticles/default'
import CarouselArticlesEspeciales from '../CarouselArticles/defaultEspeciales'
import ButtonSeeMore from '../ButtonSeeMore/default'

const ImagenDefault = "https://larepublica.pe/resizer/3KAU2WunY-i2T7mJEn9_Hti5DNc=/130x130/top/smart/s3.amazonaws.com/arc-authors/gruporepublica/5c0b3df8-490f-4b2d-916a-7181d6dc24b6.png"

const ContentHome = ({ DataSelecionEditor, DataEspeciales, DataLaUnidad }) => {
  return (
    <ContainerArtcl>
      <Title>NUESTRA SELECCIÓN </Title>
      <WrapperArticles>
        {
          DataSelecionEditor &&
          DataSelecionEditor.map((item, i) => (
            console.log(item),
            <Articles
              key={i}
              redirect={item?.url}
              picture={item?.image?.url_origin || item?.image?.url || ImagenDefault}
              description={item?.title.split(" - ")[0]}
              drafting={item?.title.split(" - ")[1]?.substring(0) || "LR Data"}
            />
          ))
        }
      </WrapperArticles>

      <CarouselArticles DataSelecionEditor={DataSelecionEditor} />

      <Title>INFORMES</Title>
      <WrapperArticles>
        {
          DataEspeciales &&
          DataEspeciales.map((item, i) => (
            <Articles
              key={i}
              redirect={item?.url}
              picture={item?.image?.url_origin || item?.image?.url || ImagenDefault}
              description={item?.title.split(" - ")[0]}
              drafting={item?.title.split(" - ")[1]?.substring(0) || "LR Data"}
            />
          ))
        }
      </WrapperArticles>

      <CarouselArticlesEspeciales DataEspeciales={DataEspeciales} />

      <a href="/informes" target="_parent" className="WrapperBtn">
        <ButtonSeeMore nameBtn="VER TODOS LOS INFORMES"/>
      </a>

      <Title>LA UNIDAD</Title>
      <WrapperClumnistas>
        {
          DataLaUnidad &&
          DataLaUnidad.map((item, i) => (
            <Columnistas
              key={i}
              imagen={item?.image?.url_origin || item?.image?.url || ImagenDefault}
              nameDrafting={item?.title?.split(" - ")[0] || ""}
              ocupacion={item?.title?.split(" - ")[1] || "LR Data"}
            />
          ))
        }
      </WrapperClumnistas>
      <style jsx>{`
        .WrapperBtn {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </ContainerArtcl>
  )
}

export default ContentHome

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
  margin: 42px auto 14px auto;
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
  margin: 0 0 20px 0;
  @media only screen and (max-width: 620px) {
    display: none;
  }
`
const WrapperClumnistas = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`