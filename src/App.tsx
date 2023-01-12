import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProductsProvider from "./Context";
import React from "react";
import Products from "./components/Products";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <React.Fragment>
      <ProductsProvider>
        <AppContainer>
          <Products />
        </AppContainer>
      </ProductsProvider>
    </React.Fragment>
  );
}

export default App;
