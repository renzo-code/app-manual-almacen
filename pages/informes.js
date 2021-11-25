import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { withRouter } from 'next/router'
import Layout from '../layouts/default'
import styled from 'styled-components'
import Articles from '../components/Articles/default'
import { useEffect, useState } from 'react';

const ImagenDefault = "https://larepublica.pe/resizer/3KAU2WunY-i2T7mJEn9_Hti5DNc=/130x130/top/smart/s3.amazonaws.com/arc-authors/gruporepublica/5c0b3df8-490f-4b2d-916a-7181d6dc24b6.png"

const Home = (props) => {

  const Full = props?.Data?.data?.packages?.total
  const pages = Math.ceil(Full / 6);
  const page = props?.Data?.data?.packages?.current_page;
  const data = props?.Data?.data?.packages?.data;
  const limit = props?.Data?.data?.packages?.per_page;

  const currentPath = props.router.pathname;
  const currentQuery = props.router.query;

  // console.log(process.env.REACT_APP_TOKEN)
  // console.log(data)

  const [titArr, setTitArr] = useState([])

  const darMas = () => {
    currentQuery.limit = 7

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    })
  }
  const darMenos = () => {
    currentQuery.limit = 6

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    })
  }

  useEffect(() => {
    data &&
      data.map((item, i) => (
        titArr[i] = item.title
      ))

    titArr.includes('Data - [Home]') ?
      darMas() :
      darMenos()

  }, [currentQuery.page])


  const [posts, setPosts] = useState(data);

  const pagginationHandler = (page) => {

    currentQuery.page = page.selected + 1;

    props.router.push({
      pathname: currentPath,
      query: currentQuery,
    });
  };

  useEffect(() => {
    setPosts(data);
  }, [props.router])

  const limitHandler = async () => {
    const object_fetch_2 = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/menu',
        'token_id': 'eac355Be7AEhhj222E18JChIE7j972573BAj2B1Eg4'
      }
    }
    var newLimit = limit + posts.length;
    const newPostAxios = await axios.get(`https://cronosservices.glr.pe/api/content/package/list?site_id=larepublica&status=1&order_field=updated_at&subdomain=data&limit=${newLimit}&total=1`, object_fetch_2);
    const newPost = newPostAxios?.data?.data?.packages?.data

    setPosts(newPost);
  };

  return (
    <Layout>
      <Content>
        <ContainerArtcl>
          <Title>INFORMES</Title>
          <WrapperArticles>
            {
              posts &&
              posts.filter(data => data.title != 'Data - [Home]').map((item, i) => (
                <Articles
                  key={i}
                  redirect={item?.slug}
                  picture={item?.data?.multimedia[0]?.path || ImagenDefault}
                  description={item?.title.split(" - ")[1]?.substring(0) || "LR Data"}
                  drafting={"LR Data"}
                />
              ))
            }
          </WrapperArticles>
        </ContainerArtcl>
        <BtnSeeMoreInformes
          disabled={posts && posts.length === Full ? 'disabled' : null}
          onClick={limitHandler}>
          <h3>VER MÁS</h3>
        </BtnSeeMoreInformes>
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
  const lmt = query.limit || 6;

  // const { REACT_APP_ENDPOINT, REACT_APP_TOKEN } = process.env

  const object_fetch = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/menu',
      'token_id': 'eac355Be7AEhhj222E18JChIE7j972573BAj2B1Eg4'
    }
    // 'eac355Be7AEhhj222E18JChIE7j972573BAj2B1Eg4'
  }

  const posts = await axios.get(`https://cronosservices.glr.pe/api/content/package/list?site_id=larepublica&status=1&order_field=updated_at&subdomain=data&limit=${lmt}&page=${page}&total=1`, object_fetch);

  return {
    Data: posts.data
  };
}

export default withRouter(Home);

const Content = styled.div`
  width: 100%;
  height: auto;
  background-color: #252525;
  padding-bottom: 30px;
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
  &:disabled {
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