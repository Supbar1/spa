import { useProductsContext } from "../Context";
import _ from "lodash";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  margin: 2px;
  border-radius: 10px;
  li {
  }
`;

const StyledLi = styled.li<{ isActive: boolean }>`
  a {
    background-color: ${({ isActive }) =>
      isActive ? "rgba(10, 10, 200, 0.2)" : "transparent"};
  }
`;
const Pagination = () => {
  const { modalId, products } = useProductsContext();
  const pagesCount = Math.ceil(products.length / 5);
  const pages = _.range(1, pagesCount + 1);
  const { page } = useParams();
  const currentPage = !!page ? Number(page) : 1;
  const maxPage = Math.ceil(products.length / 5);
  
  return modalId ? (
    <></>
  ) : (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <LinkStyled to={currentPage === 1 ? "/1" : `/${currentPage - 1}`}>
            &laquo;
          </LinkStyled>
        </li>
        {pages.map((page: number) => (
          <StyledLi key={page} isActive={page === currentPage}>
            <LinkStyled to={`/${page}`}>{page}</LinkStyled>
          </StyledLi>
        ))}

        <li className="page-item">
          <LinkStyled
            to={currentPage === maxPage ? `/${maxPage}` : `/${currentPage + 1}`}
          >
            &raquo;
          </LinkStyled>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
