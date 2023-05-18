import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  padding: 24px 6% 40px 6%;
  color: black;
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 15px;
  font-weight: 600;
`;
const Text = styled.div``;
const Right = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>DANE KONTAKTOWE</Title>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa
          aliquid voluptatum eius quod eligendi aliquam porro, libero beatae
          sequi culpa vero nobis, facere ipsam sit fugiat maxime fugit vitae!
        </Text>
      </Left>
      <Right>
        <Title>ZAINTERESOWANY WSPÓŁPRACĄ?</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          ratione ex mollitia dignissimos ea eligendi facilis dolores molestiae
          hic accusamus quaerat ipsum veniam, voluptate consequuntur praesentium
          repellat autem earum explicabo?
        </Text>
      </Right>
    </Container>
  );
};

export default Footer;
