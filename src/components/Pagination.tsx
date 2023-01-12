import { useProductsContext } from "../Context";
import { useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  margin: 2px;
  border-radius: 10px;
`;
const Pagination = () => {
  const { isModalOpen, products } = useProductsContext();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pagesCount = Math.ceil(products.length / 5);
  const pages = _.range(1, pagesCount + 1);

  return isModalOpen ? null : (
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
  );
};

export default Pagination;
