import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: ;
`;

const Red = styled.div`
  background-color: red;
`;

export default function BigRed() {
  return (
    <Container>
      <Red>Press Me</Red>
    </Container>
  );
}
