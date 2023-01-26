import { useProductsContext } from "../Context";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import httpService from "./services/httpService";
import config from "./services/config.json";

const Message = styled.div`
  width: 100%;
  margin: 2rem 0;
`;
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

  let perPage = !!per_page ? Number(per_page?.substring(9)) : 5;
  perPage = isNaN(perPage) || perPage > 12 ? 5 : perPage;

  const apiProducts = async (): Promise<any> => {
    try {
      const { data } = await httpService.get(
        config.api + `?page=${Number(page)}&per_page=${perPage}`
      );
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    apiProducts();
  }, [page, per_page, totalItems]);

  let pagesQuantity = Math.ceil(totalItems / perPage);
  const isPageExist = () => {
    return 0 < Number(page) && pagesQuantity! >= Number(page);
  };
  return (
    <>
      {isPageExist() ? (
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
      ) : (
        <Message>Given page doesn't exist. Try pagination.</Message>
      )}
    </>
  );
};
export default ProductsTable;
