import styled from "styled-components";
import { useProductsContext } from "./../Context";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: center;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  margin-top: auto;
  margin-left: auto;
  position: fixed;
`;
const ShopWindow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: max(600px, 50%);
  height: min(700px, 100%);
  background-color: white;
  /* overflow-y: auto; */
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 100vw;
    width: 15px;
    height: 15px;
    background: var(--clr-accent-300);
  }
`;
const Header = styled.h2`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 2rem;
  font-size: var(--fs-900);
  width: 100%;
`;
const Table = styled.table`
  padding: 1rem;
  text-align: center;
`;
const TableRow = styled.tr`
  padding: 1rem;
`;
const TableData = styled.td`
  padding: 1rem;
  @media (max-width: 500px) {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;
interface ModalType {
  id: number;
}

const Modal = ({ id }: ModalType) => {
  const { products, setIsModalOpen } = useProductsContext();
  const newItem = products[id - 1];

  return (
    <Container>
      <ShopWindow>
        <Header>
          <h2>Choosen Product</h2>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </Header>
        <Table>
          <thead>
            <tr>
              {Object.keys(newItem).map((value: any, index) => {
                return (
                  <th key={index}>
                    <TableData>{value}</TableData>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(newItem).map((value: any, index) => {
                return <TableData key={index}>{value}</TableData>;
              })}
            </tr>
          </tbody>
        </Table>
      </ShopWindow>
    </Container>
  );
};
export default Modal;
