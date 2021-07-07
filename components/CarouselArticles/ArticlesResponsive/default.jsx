import styled from 'styled-components'

const ArticlesResponsive = ({ picture, description, drafting }) => {
  return (
    <>
      <ContentArticles>
        <WrapperImage>
          <Image src={picture} />
        </WrapperImage>
        <Description>{description}</Description>
        <Drafting>Redactado por: {drafting}</Drafting>
      </ContentArticles>
    </>
  )
}

export default ArticlesResponsive

const ContentArticles = styled.div`
  height: auto;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`
const WrapperImage = styled.div`
  max-width: 463px;
  max-height: 273px;
  margin: 0 auto;
`
const Image = styled.img`
  width: 100%;
  max-height: 273px;
  height: auto;
  object-fit: cover;
`
const Description = styled.h4`
  color: white;
  font-weight: 600;
  max-width: 463px;
  width: 100%;
  font-size: 18.5px;
  margin: 10px auto ;
  line-height: 19px;
  letter-spacing: 0.5px;
  &:hover {
    text-decoration: currentcolor solid underline;
    cursor: pointer;
  }
`
const Drafting = styled.h6`
  color: white;
  font-size: 14px;
  font-weight: 100;
  font-style: oblique;
`