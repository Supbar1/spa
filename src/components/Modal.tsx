import styled from "styled-components";
import { ProductType, useProductsContext } from "./../Context";

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 1;
`;
const ShopWindow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: min(600px, 100%);
  height: min(300px, 100%);
  background-color: white;
  border-radius: 30px;
`;
const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
`;

const TableHeader = styled.th`
  padding: 0.8rem;
  @media (max-width: 500px) {
    padding: 0.17rem;
    font-size: 0.6rem;
  }
`;
const TableData = styled.td`
  padding: 0.8rem;
  @media (max-width: 500px) {
    padding: 0.17rem;
    font-size: 0.5rem;
  }
`;

const Modal = () => {
  const { modalId, setModalId, products } = useProductsContext();

  const itemIndex: number = products.findIndex(
    (product) => product.id === modalId
  );
  const modalItem: ProductType = products[itemIndex];

  return (
    <Container>
      <ShopWindow>
        <Header>
          <h2>Choosen Product:</h2>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setModalId(undefined)}
          >
            Close
          </button>
        </Header>
        <table className="table">
          <thead>
            <tr>
              {Object.keys(modalItem).map((value: string) => (
                <TableHeader key={value}>{value}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(modalItem).map((value: string) => (
                <TableData key={value}>{value}</TableData>
              ))}
            </tr>
          </tbody>
        </table>
      </ShopWindow>
    </Container>
  );
};
export default Modal;
