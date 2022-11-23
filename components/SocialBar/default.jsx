import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share'

const SocialBar = ({}) => {
  return (
    <>
      <div className="social">
        <ul>
            <li>
              <FacebookShareButton url="https://data.larepublica.pe/" /*quote={`${metadataRedes.metaTitle} - ${metadataRedes.metaDescription}`>}*/>
                <a className="facebook" target="_blank">
                  <ContentIcon>
                    <FontAwesomeIcon  icon={faFacebookF}/>
                  </ContentIcon>
                </a>
              </FacebookShareButton>
            </li>
          <li>
              <TwitterShareButton url={"https://data.larepublica.pe/"} /*title={`${metadataRedes.metaTitle} - ${metadataRedes.metaDescription}`}*/>
                <a className="twitter" target="_blank">
                  <ContentIcon>
                    <FontAwesomeIcon  icon={faTwitter}/>
                  </ContentIcon>
                </a>
              </TwitterShareButton>
          </li>
          <li>
            <WhatsappShareButton url={"https://data.larepublica.pe/"} /*title={`${metadataRedes.metaTitle} - ${metadataRedes.metaDescription}`}*/>
              <a className="whatsapp" target="_blank" href="https://api.whatsapp.com/send?phone=51983555073&text=D%C3%A9janos%20tu%20mensaje%20;)">
                <ContentIcon>
                  <FontAwesomeIcon icon={faWhatsapp}/>
                </ContentIcon>
              </a>
            </WhatsappShareButton>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .social{
          position: fixed;
          left: 0px;
          bottom: 0;
          margin-bottom: 400px;
          z-index: 2000;
        }
        .social ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .social ul li a {
          display: inline-block;
          color: #fff;
          background: #738A8D;
          padding: 7px 7px;
          text-decoration: none;
        }
        .print-img{
          height: 35px;
          width: 35px;
          background-color: #fff;
        }
        .social ul li .facebook { background: #3b5998; }
        .social ul li .twitter { background: #00abf0; }
        .social ul li .whatsapp { background: #0DC143; }

        .social ul li a:hover {
          padding: 7px 20px;
          transition: all 0.5s ease;
        }
        @media (max-width: 450px) {
          .social{
            bottom: 0;
            margin-bottom: 0px;
            width: 100%;
          }
          .social ul {
            display: flex;
            justify-content: center;
          }
          .social ul li a:hover{
            padding: none;
          }
          .social ul li .facebook { width: 70px; }
          .social ul li .twitter { width: 70px; }
          .social ul li .whatsapp { width: 70px; }
        }
      `}</style>
    </>
  )
}

export default SocialBar

const ContentIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  font-size: 23px;
  text-align: center;
  @media (max-width: 450px) {
    margin: 0 auto;
  }
`