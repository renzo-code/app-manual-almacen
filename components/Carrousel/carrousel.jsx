import Carousel from 'react-elastic-carousel'
import { ContentCarousel } from './style'
import './style'

const ImgPrueba = [
  {
    url: 'https://origin.cronosmedia.glr.pe/large/2021/06/11/lg_60c379c61e4be324ba796483.jpg',
    title: 'MEDICOS INVESTIGAN VACUNA CONTRA EL CORONAVIRUS',
    subTitle: 'Medicos peruanos unen fuerzas para crear y combatir el coronavirus tras las grandes olas de contagios que se nos viene.'
  },
  {
    url: 'https://origin.cronosmedia.glr.pe/large/2021/06/11/lg_60c37465be37216bbc587486.jpg',
    title: '¡LA EUROCOPA SE ESTÁ JUGANDO HOY!, ¡QUE ESPERAS VEN A VERLO!',
    subTitle: 'Veo aqui todos los partidos de la Eurocopa gratis y Online, recomiende a sus amigos y disfrute del mejor futbol del planeta. '
  },
  {
    url: 'https://origin.cronosmedia.glr.pe/large/2021/06/11/lg_60c3748c06fba66827657b8a.jpg',
    title: 'VERIFIQUE SU TIPO DE CAMBIO AQUÍ, COMPRA Y VENTA DE DOLARES EN EL PERÚ',
    subTitle: 'Tras muchas especulaciones la subida y bajada constante del dolar en nuestro pais es increiblemente inestable, pulse aqui para ver mas informacion.'
  }
]

const SliceCarrousel = () => {
  return (
    <>
      <div className="ContentSuplement">
        <ContentCarousel>
          <Carousel >
            {ImgPrueba &&
              ImgPrueba.map((item, index) => (
                <div key={index}>
                  <a className="redirec_slider"
                    href={item.url}
                    target="_blank"
                  >
                    <div className="SliderTitle">
                      <h2>{item.title}</h2>
                    </div>
                    <div className="SliderSubtitle">
                      <h5 className="subtitle">{item.subTitle}</h5>
                    </div>
                    <img
                      className="imgSlider"
                      src={item.url}
                      alt={'slider' + index}
                    />
                  </a>
                </div>
              ))}
          </Carousel>
        </ContentCarousel>
      </div>
      <style jsx="true">
        {`
            .ContentSlider {
              display: block;
              margin: 0px auto 40px auto;
            }
            .ContentSlider .awssld__bullets button {
              border: none;
              background: #cccccc;
            }
            .SliderTitle {
              align-items: center;
              background: rgba(0,0,0,.48);
              display: flex;
              height: 110%;
              padding-left: 50px;
              position: absolute;
              // width: 100vw;
              z-index: 10;
              width: 33.4%
            }
            .SliderTitle h2 {
              color: #fff;
              font-family: Lato, sans-serif;
              // font-size: 1px;
              font-weight: 800;
              text-transform: uppercase;
              text-align: start;
              width: 100%;
              text-shadow: rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em;
            }
            .SliderSubtitle {
              display: flex;
              justify-content: center;
              position: absolute;
              bottom: 20%;
              width: 28%;
              lign-items: center;
              z-index: 10;
              padding-left: 50px;
              align-items: center;
              max-width: 33.4%
            }
            .subtitle {
              color: white;
              font-family: Lato, sans-serif;
              font-size: 18px;
              font-weight: 300;
              text-transform: uppercase;
              text-align: start;
              width: 100%;
              text-shadow: rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em;
            }
            .imgSlider {
              height: 100%;
              width: 100%;
            }
            .redirec_slider {
              height: 100%;
            }
            @media only screen and (min-width: 768px) {
              .SliderTitle h2 {
                width: 100%;
                font-size: 30px;
              }
            }
            @media only screen and (max-width: 768px) {
              .subtitle {
                font-size: 15px;
              }
            }
            @media only screen and (max-width: 555px) {
              .SliderTitle {
                padding-left: 20px;
              }
              .SliderSubtitle {
                padding-left: 20px;
                bottom: 10%;
              }
              .subtitle {
                font-size: 12px;
              }
              .SliderTitle h2 {
                font-size: 16px;
              }
            }
            @media only screen and (min-width: 1000px) {
              .SliderTitle h2 {
                width: 100%;
                font-size: 48px;
              }
            }
            @media only screen and (max-width: 1000px) {
              .SliderSubtitle {
                // bottom: 22%;
              }
            }
          `}
      </style>
    </>
  )
}

export default SliceCarrousel