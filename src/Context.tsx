import React, { useState, createContext, ReactNode, useEffect } from "react";
import config from "./components/services/config.json";
import http from "./components/services/httpService";
interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextType {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  modalId: number | undefined;
  setModalId: React.Dispatch<React.SetStateAction<number | undefined>>;
  totalItems: number;
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
}
export interface ProductType {
  id: number;
  color: string;
  name: string;
  pantone_value: string;
  year: number;
}
const ProductsContext = createContext({} as ProductsContextType);

export const useProductsContext = () => {
  return React.useContext(ProductsContext);
};

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [modalId, setModalId] = useState<number | undefined>(undefined);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  const apiPagesNumber = async (): Promise<void> => {
    const { data } = await http.get(config.api);
    setTotalItems(data.total);
  };
  useEffect(() => {
    apiPagesNumber();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        modalId,
        setModalId,
        totalItems,
        setTotalItems,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
