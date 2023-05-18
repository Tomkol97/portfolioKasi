import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 20px;
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  color: white;
  padding: 0 6%;
`;
const Logo = styled.div``;
const Menu = styled.div`
  display: flex;
  align-items: center;
  transition: all 1.5s ease;
`;
const MenuItem = styled.div`
  flex: 1;
  margin: 0 15px;

  cursor: pointer;
  /* border-bottom: none; */
  transition: border 1s linear;
  &:after {
    content: "";
    display: block;
    margin: auto;
    height: 1px;
    width: 100%;
    background-color: currentColor;
    left: 0;
    transform: scalex(0);
    transform-origin: right;
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:hover:after {
    background: white;
    transform: scalex(1);
    transform-origin: left;
  }
`;
const NavbarLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    border-bottom: solid 1px white;
  }
`;

function Navbar() {
  return (
    <Container>
      <Logo>KASIA.</Logo>
      <Menu>
        <MenuItem>
          <NavbarLink to={"/"}>PORTFOLIO</NavbarLink>
        </MenuItem>
        <MenuItem>
          <NavbarLink to={"/proces"}>PROCES</NavbarLink>
        </MenuItem>
        <MenuItem>
          {" "}
          <NavbarLink to={"/o-mnie"}>O MNIE</NavbarLink>
        </MenuItem>
        <MenuItem>
          {" "}
          <NavbarLink to={"/kontakt"}>KONTAKT</NavbarLink>
        </MenuItem>
      </Menu>
    </Container>
  );
}

export default Navbar;
