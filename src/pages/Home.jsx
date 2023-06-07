import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Container = styled.div`
  background-color: #bccce0;
  color: #333;
`;

const HomeBanner = styled.div`

width: 100%;

`;

const Home = () => {
  return (
    <Container>
      <Header />
        <HomeBanner>
          <img className="homepagebanner" src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" />
        </HomeBanner>
      <Footer />
    </Container>
  );
};

export default Home;
