/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styled from "styled-components";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { useState } from "react";
const Header = () => {
  const { cars } = useSelector((state) => state.carState);
  const [show, setShow] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <p key={index}>
              <a href="#">{car}</a>
            </p>
          ))}
      </Menu>

      <RightMenu>
        <a href="#">SHOP</a>
        <a href="#">Tesla Account</a>
        <MenuIcon onClick={() => setShow(true)}></MenuIcon>
      </RightMenu>
      <BurgetNav show={show}>
        <CloseWrapper>
          <CustomClose onClick={() => setShow(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
      </BurgetNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.4rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const MenuIcon = styled(DehazeIcon)`
  cursor: pointer;
`;

const BurgetNav = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  background-color: #fff;
  list-style-type: none;
  margin: 0;
  padding: 0;
  z-index: 100;
  display: flex;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  flex-direction: column;
  padding: 20px;
  transition: 200ms transform ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  width: 100%;
  text-align: right;
`;
