import { useProductsContext } from "./../Context";
import styled from "styled-components";

const PrductsTable = styled.table`
  /* min-height: 500px; */
`;
const TableElement = styled.th`
  padding: 1rem;
  height: 10px;
`;
const TableRow = styled.tr`
  height: 100px;
`;
const ProductsTable = () => {
  const { setModalId, setIsModalOpen, products, currentPage } =
    useProductsContext();
  const startIndex = (currentPage - 1) * 5;
  const openModal = (id: number) => {
    setIsModalOpen((state) => !state);
    setModalId(id);
  };
  return (
    <PrductsTable>
      <thead>
        <TableRow>
          <TableElement>Id</TableElement>
          <TableElement>Name</TableElement>
          <TableElement>Year</TableElement>
        </TableRow>
      </thead>
      <tbody>
        {products.slice(startIndex, startIndex + 5).map((item) => (
          <TableRow
            key={item.id}
            style={{ backgroundColor: `${item.color}`, border: "none" }}
            onClick={() => openModal(item.id)}
          >
            <TableElement>{item.id}</TableElement>
            <TableElement>{item.name}</TableElement>
            <TableElement>{item.year}</TableElement>
          </TableRow>
        ))}
      </tbody>
    </PrductsTable>
  );
};

export default ProductsTable;
