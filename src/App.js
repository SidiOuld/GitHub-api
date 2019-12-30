import React from "react";
import "./App.css";
import styled from "styled-components";
import Form from "./Components/Form";
import logo from "./logowhite.png";
import mark from "./markwhite.png";

const Container = styled.div`
  header {
    height: 75px;
    background-color: #282c34;
    text-align: center;
    display: flex;
    justify-content: space-between;
    padding: 0px 25px;
    img {
      margin-top: 15px;
      height: 50%;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Container>
        <header className="header">
          <img src={logo}></img>
          <img src={mark}></img>
        </header>
        <Form />
      </Container>
    </div>
  );
}

export default App;
