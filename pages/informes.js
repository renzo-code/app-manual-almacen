import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { withRouter } from 'next/router'
import Layout from '../layouts/default'
import styled from 'styled-components'
import Articles from '../components/Articles/default'

const ImagenDefault = "https://larepublica.pe/resizer/3KAU2WunY-i2T7mJEn9_Hti5DNc=/130x130/top/smart/s3.amazonaws.com/arc-authors/gruporepublica/5c0b3df8-490f-4b2d-916a-7181d6dc24b6.png"
  
const Home = (props) => {

    var pages = 3;
    var page =  props?.Data?.data?.packages?.current_page;
    var data = props?.Data?.data?.packages?.data;
    var limit =  props?.Data?.data?.packages?.per_page;

    console.log(props)
    
    const pagginationHandler = (page) => {
      const currentPath = props.router.pathname;
      const currentQuery = props.router.query;
      currentQuery.page = page.selected + 1;
    
      props.router.push({
          pathname: currentPath,
          query: currentQuery,
      });
    };
    var a = 2
    const limitHandler = () => {
      
      const currentPath = props.router.pathname;
      const currentQuery = props.router.query;
      currentQuery.limit = limit + 4;
    
      props.router.push({
          pathname: currentPath,
          query: currentQuery,
      });

      a = a * 2
    };
    
    return (
        <Layout>
            <Content>
                <ContainerArtcl>
                    <Title>INFORMES</Title>
                    <WrapperArticles>
                        {
                            data &&
                            data.map((item, i) => (
                              <Articles
                                key={i}
                                redirect={item?.slug}
                                picture={item?.data?.multimedia[0]?.path || ImagenDefault}
                                description={item?.title.split(" - ")[1]?.substring(0) || "LR Data"}
                                drafting={"LR Data"}
                              />
                          ))
                            // data.filter(data => data.title != 'Data - [Home]').map((item, i) => (
                            //     <Articles
                            //       key={i}
                            //       redirect={item?.slug}
                            //       picture={item?.data?.multimedia[0]?.path || ImagenDefault}
                            //       description={item?.title.split(" - ")[1]?.substring(0) || "LR Data"}
                            //       drafting={"LR Data"}
                            //     />
                            // ))
                        }
                    </WrapperArticles>
                    {/* <button className='onlymobile' onClick={limitHandler}>Next</button> */}
                </ContainerArtcl>
                <BtnSeeMoreInformes onClick={limitHandler}>
                  <h3>VER MÁS</h3>
                </BtnSeeMoreInformes>
                {/* <BtnSeeMoreInformes onClick={limitHandler} nameBtn="VER MÁS"/> */}
                <ReactPaginate
                    previousLabel={'🡸'}
                    nextLabel={'🡺'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    activeClassName={'active'}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}

                    initialPage={page - 1}
                    pageCount={pages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={pagginationHandler}
                />
            </Content>
        </Layout>
    );
};

Home.getInitialProps = async ({ query }) => {

    const page = query.page || 1;
    const limit = query.limit || 1;

    const object_fetch = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/menu',
            'token_id': 'eac355Be7AEhhj222E18JChIE7j972573BAj2B1Eg4'
        }
    }

    const posts = await axios.get(`https://cronosservices.glr.pe/api/content/package/list?site_id=larepublica&status=1&order_field=updated_at&subdomain=data&limit=${limit}&page=${page}`, object_fetch);
    
    return { Data: posts.data };
}
    
export default withRouter(Home);

const Content = styled.div`
  width: 100%;
  height: auto;
  background-color: #252525;
`

const ContainerArtcl = styled.div`
  height: 100%;
  width: 100%;
`
const Title = styled.h1`
  text-align: center;
  font-size: 30px;
  color: white;
  font-weight: 800;
  line-height: 1.5;
  margin: 0px auto 14px auto;
  width: 50%;
  &::after{
    content: "";
    display: block;
    background-color: #343434;
    width: 100%;
    height: 4px;
    margin-top: 5px;
    @media only screen and (max-width: 620px) {
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 655px) {
    font-size: 25px;
    margin: 20px auto 14px auto;
  }
  @media only screen and (max-width: 385px) {
    font-size: 23px;
  }
`
const WrapperArticles = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 20px;
  width: 83%;
`

const BtnSeeMoreInformes = styled.button`
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
  display: none;
  &:hover{
    opacity: 0.5;
    transition: 0.3s;
  }
  @media only screen and (max-width: 620px) {
    width: 300px;
    font-size: 14px;
    margin: 0 auto;
    margin-top: 20px;
    
    display: block;
  }
`