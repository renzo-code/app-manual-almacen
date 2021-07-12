import React from 'react'
import Carousel from 'react-elastic-carousel'
// import Slider from 'infinite-react-carousel'
import { ContentCarousel } from './style'
import './style'

const SliceCarrousel = ({ DataPortada }) => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 5000
  }

  return (
    <>
      <div className="ContentSuplement">
        <ContentCarousel>
          <Carousel
            enableAutoPlay
            autoPlaySpeed={5000}
          >
            {/* <Slider {...settings}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
            </Slider> */}
            {DataPortada &&
              DataPortada.map((item, index) => (
                <div key={index}>
                  <a className="redirec_slider"
                    href={item?.url}
                    target="_parent"
                  >
                    <div className="SliderTitle">
                      <h2 className="title-principal">{item?.title?.split(" - ")[0]}</h2>
                      <div className="SliderSubtitle">
                        <h5 className="subtitle">{item?.title?.split(" - ")[1]}</h5>
                      </div>
                    </div>
                    <img
                      className="imgSlider slide_img"
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
              z-index: 10;
              width: 33.4%
            }
            .title-principal {
              height: auto;
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
              letter-spacing: -0.5px;
            }
            .SliderSubtitle {
              display: flex;
              justify-content: center;
              position: absolute;
              bottom: 40%;
              width: 100%;
              lign-items: center;
              z-index: 10;
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
              line-height: 1.2;
              text-shadow: rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em, rgb(0, 0, 0) 0px 0px 0.2em;
            }
            .imgSlider {
              height: 100%;
              width: 100%;
            }
            .redirec_slider {
              height: 100%;
            }
            @media only screen and (max-width: 1326PX) {
              .SliderTitle h2 {
                font-size: 37px;
              }
              .title-principal {
                height: 10%;
              }
              .subtitle {
                // font-size: 16px;
              }
              .SliderSubtitle {
                bottom: 38%;
              }
            }
            @media only screen and (max-width: 1180PX) {
              .SliderTitle h2 {
                font-size: 32px;
                margin-bottom: 15px;
              }
              .subtitle {
                font-size: 15px;
                // display: flex;
                // height: 70px;
                // flex-direction: column-reverse;
              }
              .SliderSubtitle {
                bottom: 40%;
              }
              .title-principal {
                // height: 10%;
              }
            }
            @media only screen and (max-width: 1011PX) {
              .SliderSubtitle {
                bottom: 38%;
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
                font-size: 28px;
              }
            }
            @media only screen and (max-width: 620px) {
              .SliderTitle h2 {
                font-size: 24px;
              }
            }
            @media only screen and (max-width: 530px) {
              .SliderTitle {
                height: 130%;
              }
              .SliderTitle h2 {
                font-size: 19px;
              }
            }
            @media only screen and (max-width: 430px) {
              .SliderTitle {
                height: 130%;
              }
              .SliderTitle h2 {
                font-size: 17px;
              }
            }
          `}
      </style>
    </>
  )
}

export default SliceCarrousel