import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
      font-family: 'Open Sans', sans-serif;
      h1,h2,h3{
        font-family: 'Righteous', cursive;
      }

    }
`;

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <h1>ashok</h1>
    </React.Fragment>
  );
}

export default App;
