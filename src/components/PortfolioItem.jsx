import React, { useState } from "react";
import styled from "styled-components";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Container = styled.div`
  width: 48%;
  padding: 20px 0;
`;
const Div = styled.div`
  overflow: hidden;
`;
const LazyLoadImageN = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
  transition: transform 0.6s ease !important;
  /* transition-duration: 2s !important; */
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Title = styled.span`
  transition: all 1s ease !important;
  padding-top: 4x;
  color: white;
  font-size: 20px;
  text-transform: uppercase;
`;

const PortfolioItem = ({ title, img }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <Container>
      <Div>
        <LazyLoadImageN src={img} effect="blur" afterLoad={handleImageLoad} />
      </Div>
      <LazyLoadComponent>
        {imageLoaded && <Title>{title}</Title>}
      </LazyLoadComponent>
    </Container>
  );
};

export default PortfolioItem;
