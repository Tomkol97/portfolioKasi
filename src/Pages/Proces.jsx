import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Container = styled.div`
  background-color: black;
`;

const Proces = () => {
  return (
    <Container>
      <Navbar />
      <Footer />
    </Container>
  );
};

export default Proces;
