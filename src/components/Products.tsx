import { useProductsContext } from "../Context";
import styled from "styled-components";
import Modal from "./Modal";
import ProductsTable from "./ProductsTable";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";

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
const Products = () => {
  const { isModalOpen, modalId } = useProductsContext();
  const [openList, setOpenList] = useState<boolean>(false);
  return (
    <Container>
      {isModalOpen ? <Modal id={modalId === undefined ? 0 : modalId} /> : null}
      <Header>Products:</Header>
      {!openList ? (
        <Link to={`/:1`}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setOpenList((state) => !state)}
          >
            Show List of Products
          </button>
        </Link>
      ) : null}
      {openList ? (
        <>
          <SearchBar />
          <ProductsTable />
          <Pagination />
        </>
      ) : null}
    </Container>
  );
};

export default Products;
