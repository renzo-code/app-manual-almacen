import styled from 'styled-components'
const ButtonSeeMore = ({ nameBtn }) => {
  return(
    <>
      <BtnSeeMore>
        {nameBtn}
      </BtnSeeMore>
    </>
  )
}

export default ButtonSeeMore

const BtnSeeMore = styled.button`
  height: 55px;
  width: 350px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.7px;
  border: #C8C8C8 solid 2px;
  cursor: pointer;
  margin-top: 30px;
  &:hover{
    opacity: 0.5;
    transition: 0.3s;
  }
  @media only screen and (max-width: 620px) {
    width: 300px;
    font-size: 14px;
    margin: 20px 0;
  }
`