import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        imgUrl="images/model-x.jpg"
        title="Model X"
        description="Orde Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        imgUrl="images/model-y.jpg"
        title="Model Y"
        description="Orde Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />
      <Section
        imgUrl="images/solar-panel.jpg"
        title="Solar Panel"
        description="Lowest Cost Solar Panel in Nigeria"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />

      <Section
        imgUrl="images/solar-roof.jpg"
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftBtnText="Order Now"
        rightBtnText="learn More"
      />
      <Section
        imgUrl="images/model-s.jpg"
        title="Model S"
        description="Orde Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />

      <Section
        imgUrl="images/accessories.jpg"
        title="Accessories"
        description="Trueted and Reliable Products"
        leftBtnText="Order Now"
        rightBtnText="learn More"
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;
