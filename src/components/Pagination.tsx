import { useProductsContext } from "../Context";
import _ from "lodash";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const OneLine = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LinkStyled = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  margin: 2px;
  border-radius: 10px;
  li {
  }
`;
const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const StyledLi = styled.li<{ isActive: boolean }>`
  a {
    background-color: ${({ isActive }) =>
      isActive ? "rgba(10, 10, 200, 0.2)" : "transparent"};
  }
`;
const Pagination = () => {
  const { totalItems } = useProductsContext();
  const navigate = useNavigate();
  const { per_page, page } = useParams();
  let perPage = Number(per_page?.substring(9));

  const isLinkValid = (page || per_page) === undefined || perPage === 0;
  //?????????????????????
  if (isLinkValid) {
    perPage = 6;
  }

  const pagesQuantity = Math.ceil(totalItems / perPage);

  let pages = _.range(1, pagesQuantity + 1);

  const isPageExist = (page: number) => {
    return (0 < page && pagesQuantity! >= page);
  };

  const handlePageChange = async ({
    currentTarget: input,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const inputPage = Number(input.value);
    if (!isPageExist(inputPage)) {
      return;
    }
    navigate(`/${inputPage}/per_page=${perPage}`);
  };

  const setItemsPerPage = async (itemsPerPage: number) => {
    const totalPages = pages.length;
    if (Number(page) > itemsPerPage / totalItems) {
      navigate(`/1/per_page=${itemsPerPage}`);
      return;
    }
    if (Number(page) > 0 && Number(page) <= totalPages) {
      navigate(`/${page}/per_page=${itemsPerPage}`);
      return;
    }
    navigate(`/1/per_page=${itemsPerPage}`);
  };
  const sizes: number[] = [2, 3, 4, 5, 10, 12];

  return (
    <>
      <Navigation>
        <ul className="pagination">
          <li className="page-item">
            <LinkStyled
              to={
                page === "1"
                  ? `/1/per_page=${perPage}`
                  : `/${Number(page) - 1}/per_page=${perPage}`
              }
            >
              &laquo;
            </LinkStyled>
          </li>
          {pages.map((pageMapped: number) => (
            <StyledLi key={pageMapped} isActive={pageMapped === Number(page)}>
              <LinkStyled to={`/${pageMapped}/per_page=${perPage}`}>
                {pageMapped}
              </LinkStyled>
            </StyledLi>
          ))}
          <li className="page-item">
            <LinkStyled
              to={
                Number(page) === pagesQuantity
                  ? `/${pagesQuantity}/per_page=${perPage}`
                  : `/${Number(page) + 1}/per_page=${perPage}`
              }
            >
              &raquo;
            </LinkStyled>
          </li>
        </ul>
        <OneLine>
          <span style={{ width: "50%", whiteSpace: "nowrap" }}>
            Items per page
            <select
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
              }}
              style={{ border: "none" }}
            >
              <option value="" hidden />
              {sizes.map((size: number) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </span>
          <span style={{ width: "40%", whiteSpace: "nowrap" }}>
            Set Page&nbsp;
            <input
              style={{ width: "40%" }}
              type="string"
              onChange={handlePageChange}
            />
          </span>
        </OneLine>
      </Navigation>
    </>
  );
};

export default Pagination;
