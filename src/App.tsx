import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductsProvider from "./Context";
import React from "react";
import Products from "./components/Products";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 1.2rem;
  line-height: 1.9;
  overflow-x: auto;
  letter-spacing: 1px;
`;

const App = () => (
  <React.Fragment>
    <ProductsProvider>
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<Products />} />
            <Route path="/:page/*" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </ProductsProvider>
  </React.Fragment>
);

export default App;
