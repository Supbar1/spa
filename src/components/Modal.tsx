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
  text-align: center;
  width: max(600px, 50%);
  height: min(700px, 100%);
  background-color: white;
  overflow-y: auto;
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
  justify-content: space-between;
  padding: 2rem;
  font-size: var(--fs-900);
`;
interface ModalType {
  id: number;
}

const Modal = ({ id }: ModalType) => {
  const { products, setIsModalOpen } = useProductsContext();

  const newItem = products[id - 1];
  const employee = {
    id: 1,
    name: "Alice",
    salary: 100,
  };
  return (
    <Container>
      <ShopWindow>
        <Header onClick={() => setIsModalOpen(false)}>Product</Header>
        <table>
          <thead>
            <tr>
              {Object.keys(newItem).map((value: any, index) => {
                return (
                  <th key={index}>
                    <td>{value}</td>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.values(newItem).map((value: any, index) => {
                return (
                  <th key={index}>
                    <td>{value}</td>
                  </th>
                );
              })}
            </tr>
          </tbody>
        </table>
      </ShopWindow>
    </Container>
  );
};
export default Modal;
