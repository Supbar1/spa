import { useProductsContext } from "./../Context";
import styled from "styled-components";

const ProductsTableStyled = styled.table`
  max-width: 400px;
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
    <ProductsTableStyled className="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Year</th>
        </tr>
      </thead>
      <tbody>
        {products.slice(startIndex, startIndex + 5).map((item) => (
          <tr
            key={item.id}
            style={{ backgroundColor: `${item.color}`, border: "none" }}
            onClick={() => openModal(item.id)}
          >
            <th scope="row">{item.id}</th>
            <th>{item.name}</th>
            <th>{item.year}</th>
          </tr>
        ))}
      </tbody>
    </ProductsTableStyled>
  );
};

export default ProductsTable;
