// import { useProductsContext } from "../Context";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// import _ from "lodash";
// const LinkStyled = styled(Link)`
//   padding: 1rem;
//   text-decoration: none;
//   margin: 2px;
//   border-radius: 10px;
// `;
// const Pagination = () => {
//   const { isModalOpen, products } = useProductsContext();
//   const [currentPage] = useState<number>(1);
//   const pagesCount = Math.ceil(products.length / 5);
//   const pages = _.range(1, pagesCount + 1);

//   return isModalOpen ? null : (
//     <nav>
//       <ul className="pagination">
//         <li className="page-item">
//           <LinkStyled to="/1">
//             <span aria-hidden="true">&laquo;</span>
//           </LinkStyled>
//         </li>
//         {pages.map((page: number) => (
//           <li key={page}>
//             <LinkStyled
//               style={
//                 page === currentPage
//                   ? { backgroundColor: " rgba(10, 10, 200, 0.2)" }
//                   : undefined
//               }
//               to={`/${page}`}
//             >
//               {page}
//             </LinkStyled>
//           </li>
//         ))}

//         <li className="page-item">
//           <LinkStyled to="/2">
//             <span aria-hidden="true">&raquo;</span>
//           </LinkStyled>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Pagination;

import { useProductsContext } from "../Context";
import { useEffect, useState } from "react";
import _ from "lodash";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const LinkStyled = styled(Link)`
  padding: 1rem;
  text-decoration: none;
  margin: 2px;
  border-radius: 10px;

  &:active {
    background-color:  rgba(10, 10, 200, 0.2)
  }
`;

const StyledLi = styled.li<{isActive: boolean}>`
  > a {
    background-color: ${({isActive}) => isActive ? 'rgba(10, 10, 200, 0.2)' : 'transparent'};
  }
`
const Pagination = () => {
  const { isModalOpen, products } = useProductsContext();
  const pagesCount = Math.ceil(products.length / 5);
  const pages = _.range(1, pagesCount + 1);
  const { page } = useParams();
  const currentPage = !!page ? Number(page) : 1
  return isModalOpen ? null : (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <LinkStyled to={`/${currentPage - 1}`}>
            <span aria-hidden="true">&laquo;</span>
          </LinkStyled>
        </li>
        {pages.map((page: number) => {
          return (
          <StyledLi key={page} isActive={page === currentPage}>
            <LinkStyled
              to={`/${page}`}
            >
              {page}
            </LinkStyled>
          </StyledLi>
        )})}


        <li className="page-item">
          <LinkStyled to={`/${currentPage + 1}`}>
            <span aria-hidden="true">&raquo;</span>
          </LinkStyled>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;