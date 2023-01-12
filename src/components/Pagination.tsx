import React from "react";
import { useProductsContext } from "../Context";
import { useState } from "react";
import _ from "lodash";

const Pagination = () => {
  const { isModalOpen, setIsModalOpen, products, currentPage, setCurrentPage } =
    useProductsContext();

  const pagesCount = Math.ceil(products.length / 5);
  const pages = _.range(1, pagesCount + 1);
  console.log(currentPage);

  return (
    <nav style={{ zIndex: "-1" }}>
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            onClick={() =>
              setCurrentPage((page) => (page - 1 === 0 ? 1 : page - 1))
            }
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pages.map((page: number) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => setCurrentPage(page)}>
              {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            onClick={() =>
              setCurrentPage((page) => (page + 1 === 3 ? 2 : page + 1))
            }
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
