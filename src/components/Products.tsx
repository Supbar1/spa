import { useProductsContext } from "../Context";
import styled from "styled-components";
import Modal from "./Modal";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { Routes, Route } from "react-router-dom";
import ChoosenPage from "./ChoosenPage";

const Header = styled.h1`
  font-weight: bold;
  letter-spacing: 1px;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  text-align: center;
`;
const ProductsTableStyled = styled.table`
  max-width: 400px;
`;

const Products = () => {
  const { modalId} = useProductsContext();

  return (
    <Container>
      {modalId ? <Modal id={modalId === undefined ? 0 : modalId} /> : null}
      <Header>Products:</Header>
        <SearchBar />
        <ProductsTableStyled className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Year</th>
            </tr>
          </thead>
          <tbody>
            <Routes>
              <Route path="/" element={<ChoosenPage />} />
              <Route path="/:page" element={<ChoosenPage />} />
            </Routes>
          </tbody>
        </ProductsTableStyled>
    < Pagination />
      
    </Container>
  );
};

export default Products;
