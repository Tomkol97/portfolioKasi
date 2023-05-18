import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import PortfolioList from "../components/PortfolioList";
import Footer from "../components/Footer";

const Container = styled.div`
  background-color: black;
`;

const Portfolio = () => {
  return (
    <Container>
      <Navbar />
      <PortfolioList />
      <Footer />
    </Container>
  );
};

export default Portfolio;
