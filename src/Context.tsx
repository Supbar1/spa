import React, { useState, createContext, ReactNode, useEffect } from "react";
import config from "./components/services/config.json";
import http from "./components/services/httpService";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextType {
  products: any[];
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  modalId: number | undefined;
  setModalId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const ProductsContext = createContext({} as ProductsContextType);

export const useProductsContext = () => {
  return React.useContext(ProductsContext);
};

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modalId, setModalId] = useState<number | undefined>(undefined);
  const apiProducts = async (): Promise<any> => {
    const { data } = await http.get(config.api);
    setProducts(data.data);
  };
  useEffect(() => {
    apiProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        products,
        isModalOpen,
        setIsModalOpen,
        modalId,
        setModalId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
