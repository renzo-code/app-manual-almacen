import Carousel from 'react-elastic-carousel'
import { ContentCarousel } from './style'
import './style'
import ArticlesResponsive from './ArticlesResponsive/default'

const ImagenDefault = "https://larepublica.pe/resizer/3KAU2WunY-i2T7mJEn9_Hti5DNc=/130x130/top/smart/s3.amazonaws.com/arc-authors/gruporepublica/5c0b3df8-490f-4b2d-916a-7181d6dc24b6.png"

const CarouselArticles = ({ DataSelecionEditor }) => {
  return (
    <>
      <div className="ContentSuplement">
        <ContentCarousel>
          <Carousel >
            {DataSelecionEditor &&
              DataSelecionEditor.map((item, index) => (
                <div className="content_slider" key={index}>
                  <a className="redirec_slider"
                    href={item.url}
                  >
                    <ArticlesResponsive
                      key={index}
                      picture={item?.image?.url_origin || item?.image?.url || ImagenDefault}
                      description={item?.title.split(" - ")[0]}
                      drafting={item?.title.split(" - ")[1]?.substring(0) || "LR Data"}
                    />
                  </a>
                </div>
              ))}
          </Carousel>
        </ContentCarousel>
      </div>
      <style jsx="true">
        {`
          @media only screen and (min-width: 621px) {
              .ContentSuplement {
                display: none;
              }
          }
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
              padding-left: 70px;
              position: absolute;
              // width: 100vw;
              z-index: 10;
              width: 33.4%
            }
            .SliderTitle h2 {
              position: absolute;
              bottom: 1px;
              color: #fff;
              font-family: Lato, sans-serif;
              // font-size: 1px;
              font-weight: 800;
              text-transform: uppercase;
              text-align: start;
              width: 100%;
            }
            .SliderSubtitle {
              display: flex;
              justify-content: center;
              position: absolute;
              bottom: 25%;
              width: 28%;
              lign-items: center;
              z-index: 10;
              padding-left: 70px;
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
            }
            .imgSlider {
              height: 100%;
              width: 45%;
            }
            .redirec_slider {
              // height: 100%;
              margin: 0 auto;
              width: inherit;
            }
            .content_slider {
              display: flex;
              justify-content: center;
              text-align: left;
              margin: 0 15px;
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
                bottom: 15%;
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
              .content_slider {
                display: flex;
                justify-content: center;
                text-align: left;
              }
            }
          `}
      </style>
    </>
  )
}

export default CarouselArticles