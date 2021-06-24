import styled from "styled-components";

export const ContentCarousel = styled.div`
position: relative;
    & > div > div > div > div > div > div > div > div > div > a {
        width: 100vw;
    }
    & > div > div > div > div > div > div > div > div > div > a > img {
        /* max-width: 100%; */
        width: 100%;
        height: auto;
        background-color: black;

        
    }

    & > div > div {
      max-height: 900px !important;
    }
    & > div > div > div {
        margin: 0;
    }

    & > div > div > div > div > div > div > div {
        height: 100%;
    }
    /* @media (max-width: 768px) {
        & > div > div {
            height: 500px !important; 
        }
    } */
    /* & > div > div > div > div > div > div > div > div > a > span {
    padding: 15px 15px 0 15px;
  } */
    & > div > div > div > div > div > div > div > div > div {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 24px;
        font-weight: 700;
        width: 100%;
        padding: 0 20px;
    }
    & > div > div > div > div > div > div > div > div {
        text-align: center;
        font-weight: 700;
        font-size: 24px;
    }
    /* & > div > div {
    } */
    & > div > .rec-pagination {
        position: absolute;
        bottom: 10%;
        margin: 0 auto;
        display: none;
        @media only screen and (max-width: 620px) {
            bottom: 2%;
        }
    }
    & > div > div > .rec-dot {
        background-color: #fff;
        box-shadow: 0 0 1px 3px #fff;
        /* border-radius: 0;
        width: 70px;
        height: 5px; */
   
    }
    & > div > div > .rec-dot_active {
        background-color: white; 
        box-shadow: 0 0 1px 3px ${({ colorSlider }) => colorSlider};
        /* box-shadow: 0 0 1px 3px #e4c37f; */
    }
    & > div > div > .rec-arrow {
        color: #000;
        background-color: transparent;
        border: 0px solid transparent;
    }
    & > div > div > .rec-arrow:hover {
        color: transparent;
        background-color: transparent;
        box-shadow: none;
        border: none;
    }
    & > div > div > .rec-arrow:focus {
        color: transparent;
        background-color: transparent;
        box-shadow: none;
        border: none;
    }
    & div > div > button {
        min-width: 5px;
    }
    & div > div > .rec-arrow-left {
        position:relative;
        z-index: 15;
        width: 24px;
        height: 24px;
        left: 80px;
        background-image: url('${process.env.APP_ROOT}img/svg_flechaizq24x24-01.svg');
        background-size: cover;
        color: transparent;
        background-color: transparent;
        box-shadow: none;
        margin-bottom: 0;
        &::before{
            font-size: 24px;
            font-family: FontAwesome;
        }
        /* display: none; */
    }
    & div > div > .rec-arrow-right {
        position:absolute;
        z-index: 10;
        width: 24px;
        height: 24px;
        right: 80px;
        background-image: url('${process.env.APP_ROOT}/img/svg_flechader24x24-01.svg');
        background-size: cover;
        color: transparent;
        background-color: transparent;
        box-shadow: none;
        margin-bottom: 0;
        /* display: none; */
    }
    @media only screen and (max-width: 1023px) {
        & > div > .rec-pagination {
            z-index: 20;
        }
        & > div > div > button  {
            height: 5px;
            width: 5px;
        }
        & > div > div > div > div > div > div > div > div > a {
            width: 99vw;
            display: flex;
            flex-direction: column;
        }
        & > div > div > div > div > div > div > div > div > a > img {
            width: 100%;
            /* height: 232px; */
            object-fit: cover;
        }
    }
    @media only screen and (min-width: 768px) {
        & div > div > .rec-arrow-right {
            right: 30px;
        }
        & div > div > .rec-arrow-left {
            /* left: 30px; */
        }
        & > div > .rec-pagination {
            left: 50%;
        }
        & > div > div > div > div > div > div > div > div > a > img {
            height: auto;
            object-fit: cover;
        }
    }
    @media only screen and (min-width: 1000px) {
        & > div > .rec-pagination {
            z-index: 20;
            
        }
        & > div > div > button  {
            height: 10px;
            width: 10px;
        }
        & > div > div > div {
            margin: 0;
        }
        & div > div > .rec-arrow-right {
            right: 56px;
        }
        & div > div > .rec-arrow-left {
            /* left: 56px; */
        }
        & > div > div > div > div > div > div > div > div {
            width: 100%;
            height: auto;
        }
        & > div > div > div > div > div > div > div > div > a > img {
            height: 100%;
            width: 100%;
        }
    }
`;
export const ContentSuplement = styled.div`
    display: block;
    margin: 0px auto 40px auto;
    & > .awssld__bullets > button {
        border: none;
        background: #cccccc;
    }
`;
export const SuplementNoticeContainerTitle = styled.div`
    padding: 30px 0;
`;
export const SuplementNoticeTitle = styled.h4`
    font-family: Roboto;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    position: relative;
    margin-top: 0;
    padding-top: 10px;
    margin-bottom: 0.5rem;
    &::before {
        content: "";
        position: absolute;
        height: 8px;
        top: -10px;
        width: 96px;
        background-color: #81cb25;
    }
`;
