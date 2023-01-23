import { useProductsContext } from "../Context";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import httpService from "./services/httpService";
import config from "./services/config.json";

const TableRow = styled.tr`
  border: 2px solid transparent;
  width: 420px;
  :hover {
    cursor: pointer;
    border-left: 2px solid black;
    border-right: 2px solid black;
  }
`;

const ProductsTable = () => {
  const { setModalId, setProducts, products, totalItems } =
    useProductsContext();

  const { page, per_page } = useParams();
  //????
  const perPage = !!per_page ? Number(per_page?.substring(9)) : 2;
  const currentPage = !!page ? Number(page) : 1;

  const pagesQuantity = Math.ceil(totalItems / Number(perPage));

  const apiProducts = async (): Promise<any> => {
    const { data } = await httpService.get(
      config.api + `?page=${Number(page)}&per_page=${perPage}`
    );
    setProducts(data.data);
    return;
  };
  useEffect(() => {
    apiProducts();
  }, [page, per_page, totalItems]);

  return (
    <>
      <table className="table">
        <thead>
          <tr style={{ width: "100%" }}>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <TableRow
              key={item.id}
              style={{ backgroundColor: `${item.color}` }}
              onClick={() => setModalId(item.id)}
            >
              <th scope="row">{item.id}</th>
              <th>{item.name}</th>
              <th>{item.year}</th>
            </TableRow>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default ProductsTable;
