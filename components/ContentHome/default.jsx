import styled from 'styled-components'
import Articles from '../Articles/default'
import Columnistas from '../Columnistas/default'
import CarouselArticles from '../CarouselArticles/default'

const DataArticles = [
  {
    picture: "img/data1.png",
    description: "La búsqueda de una vivienda social, entre la falta de planificación y políticas sin vigencia",
    drafting: "Rider Bendezú"
  },
  {
    picture: "img/data1.png",
    description: "La búsqueda de una vivienda social, entre la falta de planificación y políticas sin vigencia",
    drafting: "Rider Bendezú"
  },
  {
    picture: "img/data1.png",
    description: "La búsqueda de una vivienda social, entre la falta de planificación y políticas sin vigencia",
    drafting: "Rider Bendezú"
  },
  {
    picture: "img/data1.png",
    description: "La búsqueda de una vivienda social, entre la falta de planificación y políticas sin vigencia",
    drafting: "Rider Bendezú"
  },
  {
    picture: "img/data1.png",
    description: "La búsqueda de una vivienda social, entre la falta de planificación y políticas sin vigencia",
    drafting: "Rider Bendezú"
  },
  {
    picture: "img/data1.png",
    description: "La búsqueda de una vivienda social, entre la falta de planificación y políticas sin vigencia",
    drafting: "Rider Bendezú"
  },
  {
    picture: "img/data1.png",
    description: "La búsqueda de una vivienda social, entre la falta de planificación y políticas sin vigencia",
    drafting: "Rider Bendezú"
  },
]

const ContentHome = () => {
  return (
    <ContainerArtcl>
      <Title>LA SELECCIÓN DEL EDITOR</Title>
      <WrapperArticles>
        {
          DataArticles.map((item, i) => (
            <Articles
              key={i}
              picture={item.picture}
              description={item.description}
              drafting={item.drafting}
            />
          ))
        }
      </WrapperArticles>

      <CarouselArticles dataArticles={DataArticles}/>

      <Title>ESPECIALES</Title>
      <WrapperArticles>
        {
          DataArticles.map((item, i) => (
            <Articles
              key={i}
              picture={item.picture}
              description={item.description}
              drafting={item.drafting}
            />
          ))
        }
      </WrapperArticles>

      <CarouselArticles dataArticles={DataArticles}/>

      <Title>LA UNIDAD</Title>
      <WrapperClumnistas>
        <Columnistas />
        <Columnistas />
        <Columnistas />
        <Columnistas />
        <Columnistas />
        <Columnistas />
        <Columnistas />
      </WrapperClumnistas>
    </ContainerArtcl>
  )
}

export default ContentHome

const ContainerArtcl = styled.div`
  height: inherit;
  width: 100%;
`
const Title = styled.h1`
  text-align: center;
  padding-top: 50px;
  font-size: 30px;
  color: white;
  font-weight: 800;
  &::after{
    content: "";
    display: block;
    background-color: #343434;
    width: 100%;
    height: 4px;
    margin-top: 5px;
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 620px) {
    font-size: 27px;
  }
`
const WrapperArticles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media only screen and (max-width: 620px) {
    display: none;
  }
`
const WrapperClumnistas = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`