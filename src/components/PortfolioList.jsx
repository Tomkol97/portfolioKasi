import React from "react";
import styled from "styled-components";
import PItem from "./PortfolioItem";
import { portfolio } from "../data";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 6%;
  padding-bottom: 20px;
`;

const PortfolioList = () => {
  return (
    <Container>
      {portfolio.map((el) => (
        <PItem img={el.img} title={el.title} pos={el.id} key={el.id} />
      ))}
    </Container>
  );
};
// const PortfolioList = () => {
//   return (
//     <Container>
//       {portfolio.map((el) => (
//         <LazyLoadImage
//           src={el.img}
//           key={el.id}
//           height={500}
//           width={333}
//           effect="blur"
//           scrollPosition={1}
//           placeholderSrc={el.img}
//         />
//       ))}
//     </Container>
//   );
// };

export default PortfolioList;
