import { useProductsContext } from "../Context";
import styled from "styled-components";
import Modal from "./Modal";
import ProductsTable from "./ProductsTable";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Routes, Route, useParams } from "react-router-dom";
import _ from "lodash";
import ChoosenPage from "./ChoosenPage";
const LinkStyled = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  margin: 2px;
  border-radius: 10px;
`;

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
const TableRow = styled.tr`
  border: none;
  border: 2px solid transparent;
  :hover {
    cursor: pointer;
    border: 2px solid black;
  }
`;
const Products = () => {
  const { isModalOpen, modalId, products } = useProductsContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pagesCount = Math.ceil(products.length / 5);
  const pages = _.range(1, pagesCount + 1);
  const { setModalId, setIsModalOpen } = useProductsContext();
  const openModal = (id: number) => {
    setIsModalOpen((state) => !state);
    setModalId(id);
  };

  let { page } = useParams();
  console.log(page);
  let startIndex = (Number(page?.slice(1, 2)) - 1) * 5;
  if (page === undefined) {
    startIndex = 0;
  }
  // const ChoosenPage =()=>{
  //   return (
  //     <>
  //       {products.slice(startIndex, startIndex + 5).map((item) => (
  //         <TableRow
  //           key={item.id}
  //           style={{ backgroundColor: `${item.color}` }}
  //           onClick={() => openModal(item.id)}
  //         >
  //           <th scope="row">{item.id}</th>
  //           <th>{item.name}</th>
  //           <th>{item.year}</th>
  //         </TableRow>
  //       ))}
  //     </>
  //   );
  // }
  return (
    <Container>
      {isModalOpen ? <Modal id={modalId === undefined ? 0 : modalId} /> : null}
      <Header>Products:</Header>
      <>
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
        <nav>
          <ul className="pagination">
            <li className="page-item">
              <LinkStyled to="/:1" onClick={() => setCurrentPage(1)}>
                <span aria-hidden="true">&laquo;</span>
              </LinkStyled>
            </li>
            {pages.map((page: number) => (
              <li key={page} onClick={() => setCurrentPage(page)}>
                <LinkStyled
                  style={
                    page === currentPage
                      ? { backgroundColor: " rgba(10, 10, 200, 0.2)" }
                      : undefined
                  }
                  to={`/:${page}`}
                >
                  {page}
                </LinkStyled>
              </li>
            ))}

            <li className="page-item">
              <LinkStyled to="/:2" onClick={() => setCurrentPage(2)}>
                <span aria-hidden="true">&raquo;</span>
              </LinkStyled>
            </li>
          </ul>
        </nav>
      </>
    </Container>
  );
};

export default Products;
