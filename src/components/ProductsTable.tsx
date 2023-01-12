import { useProductsContext } from "./../Context";
import styled from "styled-components";
import { Routes, Route, useParams } from "react-router-dom";
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

const ProductsTable = () => {
  const { setModalId, setIsModalOpen, products } = useProductsContext();
  const openModal = (id: number) => {
    setIsModalOpen((state) => !state);
    setModalId(id);
  };
  let { page } = useParams();
  console.log(page);
  let startIndex = (Number(page?.slice(1, 2)) - 1) * 5;
  if (page === undefined){
startIndex = 0
  }


  return (
    <ProductsTableStyled className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        {/* <Routes>
          <Route path="/" element={products.slice(startIndex, startIndex + 5).map((item) => (
          <TableRow
            key={item.id}
            style={{ backgroundColor: `${item.color}` }}
            onClick={() => openModal(item.id)}
          >
            <th scope="row">{item.id}</th>
            <th>{item.name}</th>
            <th>{item.year}</th>
          </TableRow>
        ))}/>
        
          <Route path="/:page" element={products.slice(startIndex, startIndex + 5).map((item) => (
          <TableRow
            key={item.id}
            style={{ backgroundColor: `${item.color}` }}
            onClick={() => openModal(item.id)}
          >
            <th scope="row">{item.id}</th>
            <th>{item.name}</th>
            <th>{item.year}</th>
          </TableRow>
        ))} />
        </Routes> */}
      </tbody>
    </ProductsTableStyled>
  );
};

export default ProductsTable;
