import { useProductsContext } from "./../Context";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const TableRow = styled.tr`
  border: none;
  border: 2px solid transparent;
  :hover {
    cursor: pointer;
    border: 2px solid black;
  }
`;

const ChoosenPage = () => {
  const { setModalId, products } = useProductsContext();
  let { page } = useParams();

  let startIndex = (Number(page) - 1) * 5;

  if (page === undefined) {
    startIndex = 0;
  }
  const openModal = (id: number) => {
    setModalId(undefined);
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
