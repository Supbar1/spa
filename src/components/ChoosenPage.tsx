import { useProductsContext } from "./../Context";
import styled from "styled-components";
import { Routes, Route, useParams } from "react-router-dom";
import Pagination from "./Pagination";
// import ChoosenPage from './ChoosenPage';
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
interface ChoosenPageProps {
  data?: any;
}
const ChoosenPage = (props: any) => {
  const { setModalId, setIsModalOpen, products } = useProductsContext();
  let { page } = useParams();


  let startIndex = (Number(page?.slice(1, 2)) - 1) * 5;
  console.log(startIndex);

  if (page === undefined) {
    startIndex = 0;
  }
  const openModal = (id: number) => {
    setIsModalOpen((state) => !state);
    setModalId(id);
  };
  return (
    <>
      {products.slice(startIndex, startIndex + 5).map((item) => (
        <TableRow
          key={item.id}
          style={{ backgroundColor: `${item.color}` }}
          onClick={() => openModal(item.id)}
        >
          <th scope="row">{item.id}</th>
          <th>{item.name}</th>
          <th>{item.year}</th>
        </TableRow>
      ))}
    </>
  );
};
export default ChoosenPage;
