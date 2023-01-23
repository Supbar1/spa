import { useProductsContext } from "../Context";
import styled from "styled-components";
import Modal from "./Modal";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import ProductsTable from "./ProductsTable";

const Container = styled.div`
  width: 420x;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  text-align: center;

  @media (max-width: 420px) {
    p {
      font-size: 0.8rem;
      margin: 0.2rem;
    }
    width: 100%;
  }
`;

const Products = () => {
  const { modalId } = useProductsContext();
  return (
    <Container>
      {modalId === undefined ? null : <Modal />}
      <p>Responsive Single Page App.</p>
      <p>Check link on mobile:</p>
      <p>https://single-page-application-blue.vercel.app</p>
      <SearchBar />
      <ProductsTable />
      <Pagination />
    </Container>
  );
};

export default Products;
