import { useProductsContext } from "./../Context";

const ProductsTable = () => {
  const { setModalId, setIsModalOpen, products, currentPage } =
    useProductsContext();
  const startIndex = (currentPage - 1) * 5;
  const openModal = (id: number) => {
    setIsModalOpen((state) => !state);
    setModalId(id);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        {products.slice(startIndex, startIndex + 5).map((item) => (
          <tr
            key={item.id}
            style={{ backgroundColor: `${item.color}`, border: "none" }}
            onClick={() => openModal(item.id)}
          >
            <th>{item.id}</th>
            <th>{item.name}</th>
            <th>{item.year}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;
