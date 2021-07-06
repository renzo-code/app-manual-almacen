import Carousel from 'react-elastic-carousel'
import { ContentCarousel } from './style'
import './style'

const SliceCarrousel = ({ DataPortada }) => {
  return (
    <>
      <div className="ContentSuplement">
        <ContentCarousel>
          <Carousel >
            {DataPortada &&
              DataPortada.map((item, index) => (
                <div key={index}>
                  <a className="redirec_slider"
                    href={item?.url}
                    target="_parent"
                  >
                    <div className="SliderTitle">
                      <h2>{item?.title?.split(" - ")[0]}</h2>
                      <div className="SliderSubtitle">
                        <h5 className="subtitle">{item?.title?.split(" - ")[1]}</h5>
                      </div>
                    </div>
                    <img
                      className="imgSlider"
                      src={item?.image?.url_origin || item?.image?.url}
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
              height: 140%;
              padding-left: 25px;
              position: absolute;
              // width: 100vw;
              z-index: 10;
              width: 33.4%
            }
            .SliderTitle h2 {
              color: #fff;
              font-family: Lato, sans-serif;
              font-size: 40px;
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
              bottom: 40%;
              width: 100%;
              lign-items: center;
              z-index: 10;
              // padding-left: 50px;
              align-items: center;
              max-width: 95.4%
            }
            .subtitle {
              color: white;
              font-family: Lato, sans-serif;
              font-size: 19px;
              font-weight: 300;
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
            @media only screen and (max-width: 1180PX) {
              .SliderTitle h2 {
                font-size: 38px;
              }
              .subtitle {
                font-size: 15px;
              }
            }
            @media only screen and (max-width: 995px) {
              .SliderSubtitle {
                bottom: 36%;
              }
            }
            @media only screen and (max-width: 900px) {
              .SliderSubtitle {
                display: none;
              }
              .SliderTitle {
                height: 145%;
              }
              .SliderTitle h2 {
                font-size: 30px;
              }
            }

            @media only screen and (max-width: 600px) {
              .SliderTitle h2 {
                font-size: 25px;
              }
            }
            @media only screen and (max-width: 500px) {
              .SliderTitle h2 {
                font-size: 17px;
              }
            }
            // @media only screen and (max-width: 768px) {
            //   .subtitle {
            //     font-size: 13px;
            //   }
            //   .SliderSubtitle {
            //     bottom: 34%;
            //   }
            // }
            // @media only screen and (max-width: 600px) {
            //   .SliderSubtitle {
            //     padding-left: 20px;
            //     bottom: 10%;
            //     display: none;
            //   }
            //   .SliderTitle {
            //     height: 140%;
            //   }
            // }
            // @media only screen and (max-width: 555px) {
            //   .SliderTitle {
            //     padding-left: 20px;
            //   }
            //   .subtitle {
            //     font-size: 12px;
            //   }
            //   .SliderTitle h2 {
            //     font-size: 16px;
            //   }
            // }
            // @media only screen and (max-width: 1000px) {
            //   .SliderSubtitle {
            //     //bottom: 34%;
            //   }
            //   .subtitle {
            //     // font-size: 15px;
            //   }
            // }

            // @media only screen and (min-width: 1000px) {
            //   .SliderTitle h2 {
            //     width: 100%;
            //     font-size: 40px;
            //   }
            // }
            // @media only screen and (min-width: 768px) {
            //   .SliderTitle h2 {
            //     // width: 100%;
            //     // font-size: 30px;
            //   }
            // }
          `}
      </style>
    </>
  )
}

export default SliceCarrousel