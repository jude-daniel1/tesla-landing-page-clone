import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({ imgUrl, title, description, leftBtnText, rightBtnText }) => {
  return (
    <Wrap imgUrl={imgUrl}>
      <ItemText>
        <Fade bottom>
          <h1>{title}</h1>
          <p>{description}</p>
        </Fade>
      </ItemText>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            <RightButton>{rightBtnText}</RightButton>
          </ButtonGroup>
        </Fade>

        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: rgba(23, 26, 32, 0.8);
  margin-left: 10px;
  @media screen and (max-width: 768px) {
    margin-top: 15px;
    margin-left: 0px;
  }
`;

const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animationDown 1.5s infinite;
`;

const Buttons = styled.div`
  text-align: center;
`;
