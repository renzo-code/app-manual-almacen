import styled from 'styled-components'

const Articles = ({ picture, description, drafting }) => {
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

export default Articles

const ContentArticles = styled.div`
  height: 330px;
  max-width: 300px;
  width: 100%;
  margin: auto;
`
const WrapperImage = styled.div`
  max-width: 263px;
  max-height: 173px;
  margin: 0 auto;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`
const Description = styled.h4`
  color: white;
  font-weight: 600;
  max-width: 263px;
  width: 263px;
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
  margin-left: 18px;
`