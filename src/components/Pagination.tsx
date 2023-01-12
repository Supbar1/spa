import { useProductsContext } from "../Context";
import _ from "lodash";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  padding: 1rem;
  background-color: rgba(10, 10, 10, 0.2);
  margin: 2px;
  border-radius: 10px;
`;
const Pagination = () => {
  const { isModalOpen, products, currentPage } =
    useProductsContext();

  const pagesCount = Math.ceil(products.length / 5);
  const pages = _.range(1, pagesCount + 1);

  return isModalOpen ? null : (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <LinkStyled to="/:1">
            <span aria-hidden="true">&laquo;</span>
          </LinkStyled>
        </li>
        {pages.map((page: number) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <LinkStyled to={`/:${page}`}>{page}</LinkStyled>
          </li>
        ))}

        <li className="page-item">
          <LinkStyled to="/:2">
            <span aria-hidden="true">&raquo;</span>
          </LinkStyled>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
