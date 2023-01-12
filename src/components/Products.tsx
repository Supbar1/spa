import { useProductsContext } from "../Context";
import styled from "styled-components";
import Modal from "./Modal";
import ProductsTable from "./ProductsTable";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";

const Header = styled.h1`
  font-weight: bold;
  letter-spacing: 1px;
`;
const Container = styled.div`
  /* min-width: 50vw;
  min-height: 50vh; */
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: right; */
  text-decoration: none;
  text-align: center;
`;

const Products = () => {
  const { isModalOpen, modalId } = useProductsContext();

  return (
    <Container>
      {isModalOpen ? <Modal id={modalId === undefined ? 0 : modalId} /> : null}
      <Header>Products</Header>

      <SearchBar />
      <ProductsTable />
      <Pagination />
    </Container>
  );
};

export default Products;