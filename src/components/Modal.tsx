import styled from "styled-components";
import { useProductsContext } from "./../Context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
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

const TableData = styled.td`
  padding: 0.8rem;
  @media (max-width: 500px) {
    padding: 0.5rem;
    font-size: 0.7rem;
  }
`;
interface ModalType {
  id: number;
}

const Modal = ({ id }: ModalType) => {
  const { products,  setModalId } = useProductsContext();
  const newItem = products[id - 1];

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
              {Object.keys(newItem).map((value: any, index) => (
                <th key={index}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(newItem).map((value: any, index) => (
                <TableData key={index}>{value}</TableData>
              ))}
            </tr>
          </tbody>
        </table>
      </ShopWindow>
    </Container>
  );
};
export default Modal;
