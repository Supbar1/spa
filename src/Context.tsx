import React, { useState, createContext, ReactNode, useEffect } from "react";
import config from "./components/services/config.json";
import http from "./components/services/httpService";

interface ProductsProviderProps {
  children: ReactNode;
}

interface ProductsContextType {
  products: any[];
  modalId: number | undefined;
  setModalId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const ProductsContext = createContext({} as ProductsContextType);

export const useProductsContext = () => {
  return React.useContext(ProductsContext);
};

const ProductsProvider = ({ children }: ProductsProviderProps) => {
  const [products, setProducts] = useState<any[]>([]);
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
        products,
        modalId,
        setModalId,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
