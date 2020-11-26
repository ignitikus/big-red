import styled from "styled-components";
import BigRed from "./Components/BigRed/BigRed";
import "./App.css";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <MainContainer>
      <BigRed />
    </MainContainer>
  );
}

export default App;
