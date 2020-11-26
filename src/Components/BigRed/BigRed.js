import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Red = styled.div`
  background-color: red;
  width: ${window.innerHeight / 3}px;
  height: ${window.innerHeight / 3}px;
  border-radius: 50%;
  box-shadow: 0 8px 0 rgb(183, 9, 0), 0 15px 20px rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    box-shadow: none;
    transform: translateY(8px);
  }
`;

const Text = styled.p`
  color: #eee;
  font-size: 5vh;
  text-shadow: 0px 2px 0px rgba(255, 255, 255, 0.3),
    0px -2px 0px rgba(0, 0, 0, 0.7);
  font-weight: 900;
  user-select: none;
`;

export default function BigRed() {
  return (
    <Container>
      <Red>
        <Text>PUSH ME</Text>
      </Red>
    </Container>
  );
}
