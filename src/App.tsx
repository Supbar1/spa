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
  line-height: 1.9;
  overflow-x: auto;
  letter-spacing: 1px;
  font-size: 1rem;
  @media (max-width: 420px) {
    font-size: 0.8rem;
  }
`;

const App = () => (
  <React.Fragment>
    <AppContainer>
      <BrowserRouter>
        <ProductsProvider>
          <Routes>
          <Route path="/*" element={<Products />} />
          <Route path="/:page/:per_page/*" element={<Products />} />
          </Routes>
        </ProductsProvider>
      </BrowserRouter>
    </AppContainer>
  </React.Fragment>
);

export default App;
